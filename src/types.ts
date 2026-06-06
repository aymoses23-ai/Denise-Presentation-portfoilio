export interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  layoutType: 'hero' | 'metric' | 'split' | 'process' | 'quote' | 'flow';
  theme: string;
  tagline?: string;
  content: string[];
  metrics?: { value: string; label: string; trend?: string }[];
  accentColor: string;
  bgColor: string;
  textColor: string;
  imageSrc?: string;
}

export interface SlideDeck {
  id: string;
  title: string;
  industry: string;
  description: string;
  slides: Slide[];
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  slideName: string;
  problem: string;
  solution: string;
  before: {
    title: string;
    bullets: string[];
    bg: string;
    text: string;
  };
  after: {
    title: string;
    tagline?: string;
    layoutType: 'hero' | 'metric' | 'split' | 'flow';
    accentColor: string;
    content: string[];
    metrics?: { value: string; label: string }[];
    visualElements?: string[];
  };
}

export interface SlideTheme {
  id: string;
  name: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  fontHeading: string;
  fontBody: string;
  borderStyle: string;
  shadowStyle: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  deckType: string;
}

export interface ProjectPackage {
  id: string;
  name: string;
  price: string;
  delivery: string;
  includes: string[];
  description: string;
  badge?: string;
}
