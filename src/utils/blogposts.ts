import { fetchContentsForFilesInDir } from "./files";
import { BlogMetadata } from "./types";
import matter from "gray-matter";

// TODO: Can you make a generic slugify function?
export function getBlogPostSlug(blog: BlogMetadata) {
    return encodeURIComponent(`${blog.title}-${blog.created?.toISOString()}`);
}

// This implementation can be changed if blogs come from an external service
export async function fetchBlogMetadatas(): Promise<BlogMetadata[]> {
    const contents = (await fetchContentsForFilesInDir("/home/mirek/Misc/cms-blog/src/data/blog")).map(f=>matter(f));
    const contentsParsed = contents.map(m=>{
        const parsedCreated = new Date(m.data.created).toString() !== 'Invalid Date' ? new Date(m.data.created) : null;
        const parsedModified = new Date(m.data.modified).toString() !== 'Invalid Date' ? new Date(m.data.modified) : null;
        return {
            title: m.data.title?.toString() ?? "No title",
            description: m.data.description?.toString() ?? "No description",
            created: parsedCreated,
            modified: parsedModified
        }}
        )
    return contentsParsed as BlogMetadata[];
}
