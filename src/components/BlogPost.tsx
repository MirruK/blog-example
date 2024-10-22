import { BlogPostType } from "@/utils/types";
import { MarkdownRenderer } from "./MarkdownRenderer";
import Link from "next/link";

export function BlogPost({ blog }: { blog: BlogPostType }) {
    return (
        <div className="flex self-center flex-col gap-12">
            <Link href="/" className="absolute top-10 right-10">Go Home</Link>
            <article className="flex flex-col gap-10 self-center max-w-full lg:max-w-blogContent text-wrap px-4 pb-8">
                <div className="flex flex-col gap-4 py-8 border-b-2 border-sky-200">
                    <h1 className="text-3xl font-semibold">{blog.title}</h1>
                    <h3 className="text-m font-medium text-gray-300">
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
