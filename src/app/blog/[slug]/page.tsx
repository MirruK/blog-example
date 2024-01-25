import { BlogPost } from "@/components/BlogPost";
import { fetchBlogBySlug } from "@/utils/blogposts";
import { BlogPostType } from "@/utils/types";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    try {
        const staticData: BlogPostType = await fetchBlogBySlug(params.slug);
        return (
            <BlogPost blog={staticData}></BlogPost>
                )
    }
    catch(e){
        return (
            <div>
                <h1>Failed to find blog</h1>
            </div>
        )
    }
}