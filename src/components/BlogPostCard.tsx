"use client";

import { useRouter } from "next/navigation";

type BlogPostCardProps = {
    header: string;
    undertext: string;
    slug: string;
};

export function BlogPostCard({ header, undertext, slug }: BlogPostCardProps) {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/blog/${slug}`)}
            className="flex flex-[0_1_21%] flex-col min-w-[300px] gap-8 p-6 lg:p-8 pt-8 bg-slate-900 border-2 border-sky-300 rounded hover:shadow-sky-700 hover:shadow-xl"
        >
            <h2 className="self-start text-lg text-nowrap">{header}</h2>
            <p className="text-600 text-sm">{undertext}</p>
        </div>
    );
}
