import { fetchContentsForFilesInDir, fetchFileContents } from "./files";
import { BlogMetadata, BlogPostType } from "./types";
import matter from "gray-matter";

const BLOGS_DIR = process.env.BLOGS_DIR || "";

function blogPostDefaults(data: Partial<BlogMetadata>): BlogMetadata {
  const parsedCreated =
    data.created && new Date(data.created).toString() !== "Invalid Date"
      ? new Date(data.created)
      : null;
  const parsedModified =
    data.modified && new Date(data.modified).toString() !== "Invalid Date"
      ? new Date(data.modified)
      : null;
  return {
    title: data.title?.toString() ?? "No title",
    description: data.description?.toString() ?? "No description",
    slug: data.slug?.toString() ?? "No slug",
    created: parsedCreated,
    modified: parsedModified,
  };
}

// TODO: Maybe refactor this to (await fetchAllPosts).find(p=>p.slug === slug);
export async function fetchBlogBySlug(slug: string): Promise<BlogPostType> {
  const blogPost = await fetchFileContents(`${BLOGS_DIR}/${slug}.md`);
  if (blogPost === null) {
    return Promise.reject("File not found");
  }
  const contentAndParsedMetadata = matter(blogPost);
  return {
    content: contentAndParsedMetadata.content ?? "",
    ...blogPostDefaults(contentAndParsedMetadata.data),
  };
}

// This implementation can be changed if blogs come from an external service
export async function fetchBlogMetadatas(): Promise<BlogMetadata[]> {
  const contents = (await fetchContentsForFilesInDir(BLOGS_DIR)).map((f) =>
    matter(f)
  );
  const contentsParsed = contents.map((m) => {
    return blogPostDefaults(m.data);
  });
  return contentsParsed;
}

// This implementation can be changed if blogs come from an external service
export async function fetchAllBlogs(): Promise<BlogPostType[]> {
  const contents = (await fetchContentsForFilesInDir(BLOGS_DIR)).map((f) =>
    matter(f)
  );
  const contentsParsed = contents.map((m) => {
    return {
      content: m.content ?? "",
      ...blogPostDefaults(m.data),
    };
  });
  return contentsParsed;
}
