export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to identify lucide icon dynamically
  colorGradient: string; // classes for hover border or bg glow
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client: string;
  image: string;
  metrics: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface WhyChooseFact {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
