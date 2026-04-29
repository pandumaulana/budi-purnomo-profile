export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    "wp:term"?: Array<Array<{ name: string; slug: string }>>;
  };
  link: string;
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}
