// src/types/index.ts

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  shortBio: string;
  location: string;
  email: string;
  phone?: string;
  profileImage: string;
  resumeUrl: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter?: string;
  instagram?: string;
  portfolio?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  siteUrl: string;
}

export interface HeroConfig {
  greeting: string;
  typingTexts: string[];
  ctaButtons: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
    tertiary: { text: string; href: string };
  };
}

export interface AboutHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface AboutConfig {
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlights: AboutHighlight[];
  strengths: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillsConfig {
  title: string;
  subtitle: string;
  categories: SkillCategory[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  achievements: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
}

export interface ProjectsConfig {
  title: string;
  subtitle: string;
  items: Project[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ExperienceConfig {
  title: string;
  subtitle: string;
  items: Experience[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  gpa?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  image?: string;
}

export interface EducationConfig {
  title: string;
  subtitle: string;
  items: Education[];
  certifications: Certification[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface AchievementsConfig {
  title: string;
  subtitle: string;
  items: Achievement[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  items: Service[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

export interface TestimonialsConfig {
  title: string;
  subtitle: string;
  items: Testimonial[];
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  description: string;
  formFields: {
    name: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    subject: { label: string; placeholder: string };
    message: { label: string; placeholder: string };
  };
  submitButton: string;
  successMessage: string;
}

export interface FooterConfig {
  copyright: string;
  links: { label: string; href: string }[];
  tagline: string;
}

export interface ThemeConfig {
  defaultMode: 'dark' | 'light';
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: { dark: string; light: string };
    surface: { dark: string; light: string };
    text: { dark: string; light: string };
  };
  fonts: {
    heading: string;
    body: string;
    mono: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  social: SocialLinks;
  seo: SEOConfig;
  hero: HeroConfig;
  about: AboutConfig;
  skills: SkillsConfig;
  projects: ProjectsConfig;
  experience: ExperienceConfig;
  education: EducationConfig;
  achievements: AchievementsConfig;
  services: ServicesConfig;
  testimonials: TestimonialsConfig;
  contact: ContactConfig;
  footer: FooterConfig;
  theme: ThemeConfig;
  navigation: NavigationItem[];
}