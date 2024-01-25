export type BlogPost = {
    title: string;
    description: string;
    content: string;
    created: Date | null;
    modified: Date | null;
}

export type BlogMetadata = Omit<BlogPost, "content">