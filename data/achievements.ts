export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  category: "certification" | "hackathon" | "workshop" | "learning" | "project";
}

export const achievements: Achievement[] = [
  {
    id: "gcp-cert",
    title: "GCP Professional Certification",
    description: "Earned Google Cloud Developer certification, demonstrating foundational cloud knowledge.",
    icon: "☁️",
    color: "#4285F4",
    category: "certification",
  },
  {
    id: "multi-certs",
    title: "Multiple Technical Certifications",
    description: "Completed certifications in Data Science, Python, Cybersecurity, and more from global platforms.",
    icon: "🏆",
    color: "#F59E0B",
    category: "certification",
  },
  {
    id: "ignite-hackathon",
    title: "IGNITE UI Challenge Participant",
    description: "Participated in the Hackoverse IGNITE theme-based UI challenge, showcasing design skills.",
    icon: "⚡",
    color: "#8B5CF6",
    category: "hackathon",
  },
  {
    id: "aicte-sttp",
    title: "AICTE IDEA Lab STTP",
    description: "Completed a 5-day intensive training in 3D Printing, IoT, and Design Thinking.",
    icon: "🔬",
    color: "#3B82F6",
    category: "workshop",
  },
  {
    id: "ai-learning",
    title: "AI & Generative AI Exploration",
    description: "Actively learning and building with AI agents, Generative AI, and automation tools like n8n.",
    icon: "🤖",
    color: "#6366F1",
    category: "learning",
  },
  {
    id: "project-builder",
    title: "Project Builder",
    description: "Conceptualized and worked on multiple real-world project ideas including platforms and dashboards.",
    icon: "🚀",
    color: "#10B981",
    category: "project",
  },
];
