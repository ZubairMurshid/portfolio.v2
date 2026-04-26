"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function ProjectsSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 sticky top-32">
      <h3 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-6 px-4">
        Other Projects
      </h3>
      
      <nav className="flex flex-col gap-1">
        {projects.map((project) => {
          const isActive = pathname === `/projects/${project.slug}`;
          
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={cn(
                "group flex flex-col gap-1 px-4 py-3 rounded-xl transition-all",
                isActive 
                  ? "bg-white/10" 
                  : "hover:bg-white/5"
              )}
            >
              <span className={cn(
                "text-sm font-bold truncate transition-colors",
                isActive ? "text-white" : "text-text-secondary group-hover:text-white"
              )}>
                {project.title}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                {project.status}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
