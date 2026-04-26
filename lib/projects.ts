export interface ProjectData {
  slug: string;
  title: string;
  category: string[];
  desc: string;
  status: string;
  liveUrl?: string;
}

export const projects: ProjectData[] = [
  {
    slug: "ai-interviewer",
    title: "AI-Powered Interview Agent Platform",
    category: ["ai", "react", "web", "fullstack"],
    desc: "A real-time interview simulator that ingests CVs, generates tailored questions, and adapts follow-ups through live voice interaction.",
    status: "In Progress",
  },
  {
    slug: "inventory-tracker",
    title: "Modern Inventory Tracking Platform",
    category: ["react", "web", "java", "fullstack"],
    desc: "A full-stack inventory dashboard for stock levels, supplier management, transaction logging, and automated low-stock alerts.",
    status: "In Progress",
  },
  {
    slug: "eventlk",
    title: "EventLK - AI Event Platform",
    category: ["ai", "web", "react", "python", "fullstack"],
    desc: "An intelligent event management system harnessing predictive analytics to automate venue recommendations and budget planning. Built with a modern full-stack architecture.",
    status: "Live",
    liveUrl: "https://www.eventlk.com",
  },
  {
    slug: "smart-campus",
    title: "Smart Campus IoT Management API",
    category: ["java", "api", "backend"],
    desc: "A lightweight JAX-RS backend for campus rooms, sensors, and telemetry with in-memory state management and observability filters.",
    status: "Completed",
  },
  {
    slug: "algo-project",
    title: "Directed Graph Acyclicity Checker",
    category: ["java", "cli", "algorithm"],
    desc: "A Java CLI utility that detects graph cycles, reconstructs cycle paths, and benchmarks DFS traversal performance.",
    status: "Completed",
  },
  {
    slug: "dynamic-book-finder",
    title: "Dynamic Book Finder",
    category: ["react", "web", "api", "fullstack"],
    desc: "React SPA powered by Google Books API, featuring global state management (Context API) and persistent local storage.",
    status: "Completed",
  },
  {
    slug: "task-manager",
    title: "Personal Task Manager",
    category: ["python", "oop"],
    desc: "A robust Python application demonstrating progression from data structure manipulation to a full Object-Oriented GUI.",
    status: "Completed",
  },
  {
    slug: "save-our-seas",
    title: "Save Our Seas - SDG Web Project",
    category: ["web", "html", "css", "js"],
    desc: "Marine ecosystem conservation initiative with volunteer portal and responsive UI design.",
    status: "Completed",
  },
];
