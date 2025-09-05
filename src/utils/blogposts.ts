import { BlogMetadata, BlogPostType } from "./types";
import { CreateClientParams, createClient } from "contentful";

const CONTENTFUL_HEADERS = {
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_API_TOKEN,
} as CreateClientParams;

function blogPostDefaults(data: any): BlogMetadata {
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
  } as BlogMetadata;
}

export async function fetchBlogBySlug(slug: string) {
  const client = createClient(CONTENTFUL_HEADERS);

  const contents = await client.getEntry(slug);
  const contentsParsed = {
    ...blogPostDefaults({
      slug: contents.sys.id,
      created: contents.sys.createdAt,
      modified: contents.sys.updatedAt,
      title: contents.fields.title,
      description: contents.fields.description,
    }),
    content: contents.fields.postContent,
  };
  return contentsParsed as BlogPostType;
}

export async function fetchAllBlogs(): Promise<BlogPostType[]> {
  const client = createClient(CONTENTFUL_HEADERS);

  const contents = await client.getEntries();
  const contentsParsed = contents.items.map((item) => ({
    ...blogPostDefaults({
      slug: item.sys.id,
      created: item.sys.createdAt,
      modified: item.sys.updatedAt,
      title: item.fields.title,
      description: item.fields.description,
    }),
    content: item.fields.postContent as string,
  }));
  return contentsParsed;
}
