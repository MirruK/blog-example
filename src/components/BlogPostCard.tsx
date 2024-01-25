'use client'

import { useRouter } from "next/navigation";

type BlogPostCardProps = {
    header: string;
    undertext: string;
    slug: string;
}

export function BlogPostCard({header, undertext, slug}: BlogPostCardProps) {
    const router = useRouter();
    return (
        <div onClick={()=>router.push(`/blog/${slug}`)} className="flex flex-col gap-8 p-8 pb-16 pt-8 bg-slate-500 border-2 border-sky-500 rounded hover:shadow-sky-700 hover:shadow-xl">
            <h2 className="self-start">{header}</h2>
            <p className="text-600 text-xs">{undertext}</p>
        </div>
    )
}