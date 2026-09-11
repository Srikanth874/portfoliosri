export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: "workshop" | "hackathon" | "learning" | "activity";
  description: string;
  highlights: string[];
  icon: string;
  color: string;
}

export const experiences: Experience[] = [
  {
    id: "aicte-idea-lab",
    title: "AICTE IDEA Lab Short Term Training Program (STTP)",
    organization: "AICTE IDEA Lab",
    period: "2024",
    type: "workshop",
    description:
      "Participated in an intensive 5-day hands-on training program covering emerging technologies and innovation methodologies.",
    highlights: [
      "3D Printing and rapid prototyping techniques",
      "IoT and Embedded Systems fundamentals",
      "Innovation and Design Thinking frameworks",
      "Product prototyping from concept to model",
    ],
    icon: "🔬",
    color: "#3B82F6",
  },
  {
    id: "ignite-challenge",
    title: "IGNITE Theme-Based UI Challenge",
    organization: "Hackoverse",
    period: "2024",
    type: "hackathon",
    description:
      "Competed in a theme-based UI/UX design challenge organized by Hackoverse, focusing on creative problem solving and interface design.",
    highlights: [
      "Theme-driven UI design",
      "Rapid ideation and prototyping",
      "Interface design under time constraints",
      "Creative problem solving",
    ],
    icon: "🎨",
    color: "#8B5CF6",
  },
  {
    id: "data-analyst-agent",
    title: "Building a Data Analyst AI Agent",
    organization: "Self-Directed Learning",
    period: "2024–2025",
    type: "learning",
    description:
      "Hands-on learning experience exploring how to design and build AI agents capable of performing data analysis tasks autonomously.",
    highlights: [
      "AI agent architecture concepts",
      "Data analysis automation",
      "n8n workflow automation",
      "Generative AI tool integration",
    ],
    icon: "🤖",
    color: "#6366F1",
  },
  {
    id: "coffee-with-hr",
    title: "Coffee with HR – Professional Development Activity",
    organization: "East Point College of Engineering and Technology",
    period: "2024",
    type: "activity",
    description:
      "Participated in a professional development session coordinating and facilitating an informal HR interaction event.",
    highlights: [
      "Professional communication skills",
      "Event coordination experience",
      "HR interaction and networking",
    ],
    icon: "☕",
    color: "#F59E0B",
  },
];
