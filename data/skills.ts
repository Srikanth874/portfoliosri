export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python", icon: "🐍", color: "#3B82F6" },
      { name: "Java", icon: "☕", color: "#F59E0B" },
      { name: "HTML", icon: "🌐", color: "#F97316" },
      { name: "CSS", icon: "🎨", color: "#6366F1" },
      { name: "JavaScript", icon: "⚡", color: "#EAB308" },
    ],
  },
  {
    id: "cs",
    label: "Computer Science",
    icon: "Cpu",
    skills: [
      { name: "Data Structures", icon: "🌲", color: "#10B981" },
      { name: "Algorithms", icon: "🔄", color: "#3B82F6" },
      { name: "Object-Oriented Programming", icon: "📦", color: "#8B5CF6" },
      { name: "Problem Solving", icon: "🧩", color: "#EC4899" },
    ],
  },
  {
    id: "ai-data",
    label: "AI & Data",
    icon: "Brain",
    skills: [
      { name: "Artificial Intelligence", icon: "🤖", color: "#6366F1" },
      { name: "Generative AI", icon: "✨", color: "#8B5CF6" },
      { name: "Data Analytics", icon: "📊", color: "#3B82F6" },
      { name: "Data Visualization", icon: "📈", color: "#10B981" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Tech",
    icon: "Wrench",
    skills: [
      { name: "Git", icon: "🔀", color: "#F97316" },
      { name: "GitHub", icon: "🐙", color: "#94A3B8" },
      { name: "VS Code", icon: "💙", color: "#3B82F6" },
      { name: "Power BI", icon: "📉", color: "#EAB308" },
      { name: "Supabase", icon: "🟢", color: "#10B981" },
      { name: "n8n", icon: "🔗", color: "#EC4899" },
      { name: "Cloud Platforms", icon: "☁️", color: "#6366F1" },
    ],
  },
  {
    id: "creative",
    label: "Creative & Product",
    icon: "Palette",
    skills: [
      { name: "UI/UX Design", icon: "🎯", color: "#EC4899" },
      { name: "Prototyping", icon: "🛠️", color: "#F59E0B" },
      { name: "Web Design", icon: "🖥️", color: "#6366F1" },
    ],
  },
];
