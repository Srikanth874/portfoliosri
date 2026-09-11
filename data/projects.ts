export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  gradient: string;
  featured: boolean;
  status: "concept" | "in-progress" | "completed";
}

export const projects: Project[] = [
  {
    id: "hyperlocal-platform",
    title: "Hyperlocal Service Hiring Platform",
    description:
      "A platform concept designed to connect households with nearby skilled local service providers — electricians, plumbers, carpenters, mechanics, and more.",
    longDescription:
      "A platform concept that bridges the gap between households and local skilled service providers. The idea focuses on making it easy to discover, vet, and directly contact nearby workers, while building a trusted local economy.",
    tags: ["Web Development", "UI/UX", "Product Design", "Supabase"],
    features: [
      "Location-based vendor discovery",
      "Customer and service-provider interfaces",
      "Vendor profiles with ratings & reviews",
      "Direct communication channel",
      "Local employment focus",
      "Premium subscription concept",
    ],
    githubUrl: null,
    demoUrl: null,
    gradient: "from-blue-600 via-indigo-600 to-violet-700",
    featured: true,
    status: "concept",
  },
  {
    id: "ai-exam-prep",
    title: "AI-Powered Student Exam Preparation Platform",
    description:
      "A study platform concept where students upload notes and question banks to receive AI-generated exam-oriented answers, explanations, and study guides.",
    longDescription:
      "An AI-driven study companion concept that processes uploaded notes, previous-year questions, and question banks to generate structured, exam-ready answers and visual aids — making studying smarter, not harder.",
    tags: ["Artificial Intelligence", "Generative AI", "Python", "Web Dev"],
    features: [
      "AI-powered content analysis",
      "Study material and PDF processing",
      "Exam-oriented answer generation",
      "Question generation from notes",
      "Notes and PDF upload interface",
      "Modern, clean web interface",
    ],
    githubUrl: null,
    demoUrl: null,
    gradient: "from-violet-600 via-purple-600 to-pink-600",
    featured: true,
    status: "concept",
  },
  {
    id: "blood-donation",
    title: "Blood Donation Platform",
    description:
      "A web project focused on connecting blood donors, supporting blood donation awareness, and making it easier to find donors in critical situations.",
    longDescription:
      "A community-driven web platform aimed at connecting willing blood donors with those in need, while spreading awareness about the importance of regular blood donation.",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
    features: [
      "Donor registration and profiles",
      "Blood type search and matching",
      "Donation awareness content",
      "Community-first design",
    ],
    githubUrl: null,
    demoUrl: null,
    gradient: "from-rose-600 via-red-600 to-orange-600",
    featured: false,
    status: "in-progress",
  },
  {
    id: "traffic-dashboard",
    title: "Traffic Violation Analysis Dashboard",
    description:
      "A data visualization project analyzing RTO/traffic violation data to uncover patterns and insights through interactive charts and dashboards.",
    longDescription:
      "A data analytics project that takes real-world traffic violation data and transforms it into actionable visual insights — helping understand trends, hotspot locations, and violation patterns.",
    tags: ["Data Analytics", "Power BI", "Data Visualization", "Python"],
    features: [
      "Interactive data visualizations",
      "Traffic pattern analysis",
      "Violation category breakdowns",
      "Trend identification",
      "Dashboard-first design",
    ],
    githubUrl: null,
    demoUrl: null,
    gradient: "from-amber-500 via-orange-600 to-red-600",
    featured: false,
    status: "completed",
  },
];
