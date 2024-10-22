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
        >
            <div className="flex gap-2 px-8 flex-col flex-nowrap text-justify justify-center">
            <p className="text-sm font-light">{created}</p>
            <h2 className="self-start text-lg text-nowrap font-medium" >{header}</h2>
            <p className="text-sm text-gray-300">{undertext}</p>
            </div>
        </div>
    );
}
