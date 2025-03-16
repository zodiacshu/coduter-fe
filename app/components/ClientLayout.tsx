"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import SidebarToggleScript from "./SidebarToggleScript";
import { SessionProvider } from "next-auth/react";

export default function ClientLayout({ children, session }: {
   children: React.ReactNode, 
   session?:any
  })
   {
  const pathname = usePathname(); // Get the current route
  const showSidebar = pathname === "/user-challenge/setup" || pathname === "/user-dashboard" || pathname === "/profile"|| pathname === "/user-stats" || pathname==='/settings' ;

  return (
    <SessionProvider session={session}>

    <SidebarProvider>
      {showSidebar && <AppSidebar />}  {/* Show sidebar on specific pages */}
      
      <SidebarInset>
        {showSidebar && (
          <>
            {/* Hidden but accessible to scripts */}
            <div className="sr-only">
              <SidebarTrigger id="sidebar-trigger" className="text-white" />
            </div>
            {/* Add the toggle script */}
            <SidebarToggleScript />
          </>
        )}
        {children}
      </SidebarInset>
    </SidebarProvider>
    </SessionProvider>
  );
}