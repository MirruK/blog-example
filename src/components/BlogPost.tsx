import { BlogPostType } from "@/utils/types";
import { MarkdownRenderer } from "./MarkdownRenderer";

export function BlogPost({ blog }: { blog: BlogPostType }) {
    return (
        <div className="flex self-center flex-col bg-slate-950 gap-12">
            <article className="flex flex-col gap-10 self-center max-w-full lg:max-w-blogContent text-wrap px-4 pb-8">
                <div className="flex flex-col gap-4 p-8 border-b-2 border-sky-200">
                    <h1 className="text-xl">{blog.title}</h1>
                    <h3 className="text-sm">
                        Created:{" "}
                        {blog.created?.toLocaleString() ?? "Nobody knows..."}
                    </h3>
                </div>
                <div className="prose prose-invert">
                    <MarkdownRenderer>{blog.content}</MarkdownRenderer>
                </div>
            </article>
            <div></div>
        </div>
    );
}
