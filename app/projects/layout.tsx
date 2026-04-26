"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ProjectsSidebar from "@/components/ProjectsSidebar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // If we are on the main projects list page, just render it normally
  if (pathname === "/projects") {
    return <>{children}</>;
  }

  // Otherwise, we are on an individual project page, so render the split layout
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar - hidden on mobile, visible on lg screens */}
      <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 lg:border-r border-white/10 hidden lg:block pt-32 pb-20">
        <ProjectsSidebar />
      </aside>
      
      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
