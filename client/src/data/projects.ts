export type Project = {
  name: string;
  status: "completed" | "in-progress" | "side-project";
  description: string;
  tech: string[];
  accent: string;
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Project Nexus",
    status: "completed",
    description:
      "Built a full-stack web application with authentication, real-time data, and a responsive dashboard interface.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    accent: "#2dd4a7",
    link: "#",
  },
  {
    name: "Operation Dark Mode",
    status: "completed",
    description:
      "Developed a component library with theme support, accessibility features, and comprehensive documentation.",
    tech: ["React", "CSS", "Storybook", "Jest"],
    accent: "#ff7a1a",
    link: "#",
  },
  {
    name: "The API Frontier",
    status: "completed",
    description:
      "Designed and implemented a RESTful API serving thousands of requests with caching and rate limiting.",
    tech: ["Node.js", "Express", "Redis", "Docker"],
    accent: "#c8e05a",
    link: "#",
  },
  {
    name: "AI Explorer",
    status: "in-progress",
    description:
      "An ongoing project exploring AI/ML integrations with web applications for intelligent user experiences.",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    accent: "#ff7eb6",
  },
  {
    name: "CLI Toolkit",
    status: "side-project",
    description:
      "A collection of command-line tools for automating repetitive development tasks.",
    tech: ["Node.js", "TypeScript", "Commander.js"],
    accent: "#2dd4a7",
    link: "#",
  },
  {
    name: "Portfolio",
    status: "side-project",
    description:
      "This site — a personal portfolio built with React, TypeScript, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    accent: "#ff7a1a",
  },
];

export const statusLabels: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In progress",
  "side-project": "Side project",
};
