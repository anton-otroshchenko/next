export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
}

export interface BlogPostPreview {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
}
