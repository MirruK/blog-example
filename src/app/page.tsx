import { BlogCardList } from "../components/BlogCardList";
import { BlogMetadata } from "@/utils/types";
import { fetchBlogMetadatas } from "@/utils/blogposts";
import Link from "next/link";

export default async function Home() {
  const staticData: BlogMetadata[] = await fetchBlogMetadatas();
  return (
    <main className="flex w-full min-h-screen flex-col justify-evenly p-24 ">
      <h1 className="text-sky-300 text-xl">Featured Articles</h1>
      <BlogCardList cards={staticData} cardsPerRow={3}></BlogCardList>
      <Link className="bg-transparent hover:text-sky-500 p-2 rounded" href="/blog">View All</Link>
    </main>
  );
}