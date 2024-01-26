import { BlogCardList } from "../components/BlogCardList";
import { BlogMetadata } from "@/utils/types";
import { fetchAllBlogs } from "@/utils/blogposts";
import Link from "next/link";

export const revalidate = 120;

export default async function Home() {
  const postData: BlogMetadata[] = await fetchAllBlogs();
  // TODO: pass cardsPerRow as state
  return (
    <main className="flex w-full min-h-screen flex-col justify-evenly p-24 ">
      <h1 className="text-sky-300 text-xl">Featured Articles</h1>
      <BlogCardList cards={postData} cardsPerRow={3}></BlogCardList>
      <Link className="bg-transparent hover:text-sky-500 p-2 rounded self-end" href="/blog">View All</Link>
    </main>
  );
}