"use client";

import { BlogMetadata } from "@/utils/types";
// @ts-expect-error
import { useRouter } from "next/navigation";
import { Fragment } from "react";

type BlogPostEntryProps = {
    header: string;
    undertext: string;
    slug: string;
    created: string;
};

export function BlogPostListing({posts}: {posts: BlogMetadata[]}) {
    return (
        <div className="flex flex-col gap-8">
            {posts.map((post) => (
                <Fragment 
                    key={post.slug}
                    >
                <BlogPostEntry
                    header={post.title}
                    undertext={post.description}
                    slug={post.slug}
                    created={post.created ? post.created.toDateString() : ""}
                />
                <div className="border-b-2"></div>
</Fragment>
            ))}
        </div>
    )
}



function BlogPostEntry({ header, undertext, slug, created }: BlogPostEntryProps) {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/blog/${slug}`)}
            className="hover:cursor-pointer hover:underline"
            // className="flex flex-[0_1_21%] flex-col min-w-[300px] gap-8 p-6 lg:p-8 pt-8 bg-slate-900 border-2 border-sky-300 rounded hover:shadow-sky-700 hover:shadow-xl"
        >
            {/* <div className="flex gap-4 flex-col flex-nowrap text-justify justify-center"> */}
            <p className="text-sm text-600 ">{created}</p>
            <h2 className="self-start text-lg text-nowrap">{header}</h2>
            {/* </div> */}
            <p className="text-600 text-sm">{undertext}</p>
        </div>
    );
}
