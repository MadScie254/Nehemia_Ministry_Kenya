
export interface NavLinkItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode; // Using ReactNode for JSX icons
  url: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  event?: string;
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  ctaLink: string;
}

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  videoUrl: string; // YouTube embed URL
  transcriptUrl?: string;
  tags: string[];
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  isUpcoming: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface PrayerRequest {
  id: string;
  name: string; // "Anonymous" if not provided
  request: string;
  timestamp: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string; // Full content, potentially markdown or HTML string
  category: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
