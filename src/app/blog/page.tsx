import { fetchAllBlogs } from "@/utils/blogposts";
import { BlogPostType } from "@/utils/types";

export default async function Blog() {
    const staticData: BlogPostType[] = await fetchAllBlogs();
    return (
        <div className="flex flex-col gap-5">
            {staticData.length > 0 ? staticData.map(p=>(
                <div key={p.slug}>
                <h2>{p.title}</h2>
                <p>{p.content}</p>
                </div>
            )) : (<h1>No blog posts available, come back later.</h1>)}
        </div>
    )
}