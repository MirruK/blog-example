import { BlogPostType } from "@/utils/types";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
// TODO: Support code blocks and math expressions in markdown

export function BlogPost({blog}: {blog: BlogPostType}) {
    return (
        <div className="flex self-center flex-col bg-slate-800 gap-12">
            <article className="flex flex-col gap-10 self-center max-w-blogContent text-wrap border-x-2 border-x-sky-500 px-4 pb-8">
            <div className="flex flex-col gap-4 p-8 border-b-2 border-sky-200">
                <h1 className="text-xl">{blog.title}</h1>
                <h3 className="text-sm">Created: {blog.created?.toLocaleString() ?? "Nobody knows..."}</h3>
            </div>
            <div className="prose prose-invert" >
            <Markdown remarkPlugins={[remarkGfm]}>{blog.content}</Markdown>
</div>
            </article>
            <div></div>
        </div>
    )
}