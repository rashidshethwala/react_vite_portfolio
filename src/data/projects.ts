import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: "nebula-ui",
    title: "Nebula UI Kit",
    summary: "A design-system powered component library.",
    description: "Nebula UI is a modular React component library built with accessibility and developer experience in mind. It ships typed primitives, tokens and themes.",
    tags: ["React", "TypeScript", "Design System"],
    cover: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop",
    year: 2024,
    role: "Lead Developer",
    stats: [
      { label: "NPM Downloads", value: "32k+" },
      { label: "Components", value: "42" }
    ],
    links: [
      { label: "GitHub", url: "https://github.com/" },
      { label: "Docs", url: "#" }
    ]
  },
  {
    id: "aurora-app",
    title: "Aurora Weather",
    summary: "Hyperlocal weather with playful visuals.",
    description: "Aurora combines NOAA data with a physics-based particle system for delightful weather. Built with React, D3 and Web Workers.",
    tags: ["React", "D3", "Workers"],
    cover: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1600&auto=format&fit=crop",
    year: 2023,
    role: "Frontend Engineer",
    stats: [
      { label: "Monthly Users", value: "120k" },
      { label: "Latency", value: "120ms" }
    ],
    links: [
      { label: "Case Study", url: "#" }
    ]
  },
  {
    id: "atlas-ml",
    title: "Atlas ML Platform",
    summary: "MLOps platform for rapid model iteration.",
    description: "Atlas provides experiment tracking, dataset versioning and model registry with GPU autoscaling. My role focused on dashboards and real-time pipelines.",
    tags: ["MLOps", "TypeScript", "WebSockets"],
    cover: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    year: 2022,
    role: "Full-Stack",
    stats: [
      { label: "Models Tracked", value: "2.3k" },
      { label: "Teams", value: "48" }
    ],
    links: [
      { label: "Live Demo", url: "#" }
    ]
  }
]

export function getProject(id: string) {
  return projects.find(p => p.id === id)
}
