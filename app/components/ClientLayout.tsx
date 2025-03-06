"use client"; // Mark it as a client component

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current route
  const isSetupPage = pathname === "/user-challenge/setup"; // Check if it's the setup page

  return (
    <SidebarProvider>
      {isSetupPage && <AppSidebar />}  {/* Show sidebar only on setup page */}
      
      <SidebarInset>
        {isSetupPage && (
          <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
          </header>
        )}
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
