export interface Personal {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    [key: string]: string | undefined;
  };
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  description: string;
}

export interface Experience {
  company: string;
  position: string;
  date: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface CVData {
  personal: Personal;
  education: Education[];
  experience: Experience[];
  skills: SkillCategory[];
  projects: Project[];
  languages: Language[];
  interests: string[];
}
