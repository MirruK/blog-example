import { BlogCardList } from "../components/BlogCardList";
import { BlogMetadata } from "@/utils/types";
import { fetchAllBlogs } from "@/utils/blogposts";
import { ProjectCardList } from "@/components/ProjectCardList";
import { fetchPinnedProjects } from "@/utils/projects";

export const revalidate = 120;

export default async function Home() {
    const postData: BlogMetadata[] = await fetchAllBlogs();
    const pinnedProjectsData = await fetchPinnedProjects();
    if (pinnedProjectsData === null || pinnedProjectsData === undefined) {
        console.log("Graphql error in fetching pinned projects");
    }
    if (pinnedProjectsData) {
        console.log("Pinned projects: ", pinnedProjectsData);
    }
    return (
        <>
            <div className="flex flex-col min-h-[50%] text-center justify-center p-12 bg-gradient-to-br from-sky-700 to-pink-700">
                <h1 className="text-2xl text-sky-300">Header</h1>
                <p className="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deleniti ducimus aspernatur dicta mollitia. Optio beatae
                    quasi, rem maiores ducimus eveniet possimus! Amet rerum
                    consequuntur velit libero, dicta omnis sed beatae.
                </p>
            </div>
            <main className="flex w-full min-h-screen flex-col justify-start align-middle gap-12 p-8">
                <h1 className="text-sky-300 text-xl">Featured Projects</h1>
                <ProjectCardList cards={pinnedProjectsData}></ProjectCardList>
                <h1 className="text-sky-300 text-xl">Featured Articles</h1>
                <BlogCardList cards={postData}></BlogCardList>
            </main>
        </>
    );
}
