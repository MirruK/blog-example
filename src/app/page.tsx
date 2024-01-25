import { BlogCardList } from "../components/BlogCardList";
import { BlogMetadata } from "@/utils/types";
import { fetchBlogMetadatas, getBlogPostSlug } from "@/utils/blogposts";
import Link from "next/link";

export type WithSlug<T> = T & {
    slug: string;
}

export default async function Home() {
  const staticData: WithSlug<BlogMetadata>[] = (await fetchBlogMetadatas()).map(c=>({...c, slug: getBlogPostSlug(c)}))
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <BlogCardList cards={staticData} cardsPerRow={3}></BlogCardList>
      <Link className="border-0 bg-transparent hover:bg-sky-700 hover:shadow-sky-700 hover:shadow-xl p-2 rounded" href="/blog">View All</Link>
    </main>
  );
}