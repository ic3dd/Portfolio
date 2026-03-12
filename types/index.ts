export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  cover_image_url: string | null;
  technologies: string[];
  github_url: string | null;
  live_url: string | null;
  featured: boolean;
  sort_order: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "technical" | "soft";
  sort_order: number;
  created_at: string;
}

export interface Profile {
  id: string;
  full_name: string | null;
  headline: string | null;
  about_text: string | null;
  avatar_url: string | null;
  email_contact: string | null;
  linkedin_url: string | null;
  github_url: string | null;
  updated_at: string;
}
