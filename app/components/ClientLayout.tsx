"use client"; // Mark it as a client component

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current route
  const isSetupPage = pathname === "/user-challenge/setup"; // Check if it's the setup page

  return (
    <SidebarProvider>
      {(isSetupPage || pathname === "/user-dashboard") && <AppSidebar />}  {/* Show sidebar on setup and dashboard pages */}
      
      <SidebarInset>
      {(isSetupPage || pathname === "/user-dashboard") && (
        <header className="flex h-7 items-center gap-4 bg-background px-6 bg-gray-900 justify-end top-4">
        <SidebarTrigger className="text-white" />
        </header>
      )}
      {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
