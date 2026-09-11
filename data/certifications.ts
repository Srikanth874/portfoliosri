export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl: string | null;
  icon: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    id: "gcp",
    name: "Google Cloud Developer – GCP Professional Certification",
    issuer: "Google Cloud",
    year: "2024",
    credentialUrl: null,
    icon: "☁️",
    color: "#4285F4",
  },
  {
    id: "data-science-101",
    name: "Data Science 101",
    issuer: "IBM / Cognitive Class",
    year: "2024",
    credentialUrl: null,
    icon: "📊",
    color: "#3B82F6",
  },
  {
    id: "python-lists",
    name: "Complex Data Types in Python: Working with Lists & Tuples",
    issuer: "Cognitive Class / IBM",
    year: "2024",
    credentialUrl: null,
    icon: "🐍",
    color: "#F59E0B",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    issuer: "Infosys Springboard",
    year: "2024",
    credentialUrl: null,
    icon: "🔒",
    color: "#10B981",
  },
  {
    id: "google-play-academy",
    name: "Google Play Academy – Store Listing Certificate",
    issuer: "Google Play Academy",
    year: "2024",
    credentialUrl: null,
    icon: "📱",
    color: "#34D399",
  },
];
