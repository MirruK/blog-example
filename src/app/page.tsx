import { BlogMetadata } from "@/utils/types";
import { fetchAllBlogs } from "@/utils/blogposts";
import { fetchPinnedProjects } from "@/utils/projects";
import { BlogPostListing } from "@/components/BlogPostListing";
import { ProjectListing } from "@/components/ProjectListing";

export const revalidate = 120;

export default async function Home() {
  const postData: BlogMetadata[] = await fetchAllBlogs();
  let pinnedProjectsData = await fetchPinnedProjects();
  if (pinnedProjectsData === null || pinnedProjectsData === undefined) {
    pinnedProjectsData = [];
    console.log("Graphql error in fetching pinned projects");
  }
  return (
    <>
      <div className="flex flex-col min-h-[50%] text-center justify-center p-12 gap-4 bg-gradient-to-br from-sky-700 to-pink-700">
        <h1 className="text-2xl text-sky-300">Hiya!</h1>
        <p className="text-lg text-sky-100">
          Below are some of my featured coding projects from github and my blog
          posts. Enjoy!
        </p>
      </div>
      <main className="flex w-full min-h-screen flex-col justify-start align-middle gap-12 p-8">
        <h1 className="text-2xl">Featured Projects</h1>
        {/* <ProjectCardList cards={pinnedProjectsData}></ProjectCardList> */}
        <ProjectListing projects={pinnedProjectsData}></ProjectListing>
        <h1 className="text-2xl">Featured Articles</h1>
        <BlogPostListing posts={postData}></BlogPostListing>
      </main>
    </>
  );
}

export const dynamic = "force-dynamic";
