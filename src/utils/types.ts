export type BlogPostType = {
  title: string;
  description: string;
  slug: string;
  content: string;
  created: Date | null;
  modified: Date | null;
};

export type BlogMetadata = Omit<BlogPostType, "content">;
