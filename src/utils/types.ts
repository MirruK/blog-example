export type BlogPostType = {
    title: string;
    description: string;
    slug: string;
    content: string;
    created: Date | null;
    modified: Date | null;
};

export type BlogMetadata = Omit<BlogPostType, "content">;

export type ProjectCardType = {
    title: string;
    description: string;
    createdAt: Date;
    githubUrl: string;
    languages: { name: string }[];
};
