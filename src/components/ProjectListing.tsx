"use client";

import { BlogMetadata, ProjectCardType } from "@/utils/types";
import Link from "next/link";

// @ts-expect-error
import { useRouter } from "next/navigation";
import { Fragment } from "react";

type ProjectEntryProps = {
    title: string;
    description: string;
    slug: string;
    created: string;
    languages: { name: string }[];
};

export function ProjectListing({projects}: {projects: (ProjectCardType | null)[]}) {
    return (
        <div className="flex flex-col gap-8">
            {projects.map((project) => (
                project && 
                <Fragment 
                    key={project.githubUrl}
                    >
                <ProjectEntry
                    title={project.title}
                    description={project.description}
                    slug={project.githubUrl}
                    created={project.createdAt ? project.createdAt.toDateString() : ""}
                    languages={project.languages}
                />
                        
                <div className="border-b-2"></div>
</Fragment>
            ))}
        </div>
    )
}



function ProjectEntry({ title, description, slug, created, languages }: ProjectEntryProps) {
    const languagesString = languages
        .reduceRight((acc, obj) => acc + ", " + obj.name, "")
        .slice(2);
    return (
        <Link
            target="_blank"
            href={slug}
            className="hover:cursor-pointer hover:underline"
        >
            <div className="flex gap-2 px-8 flex-col flex-nowrap text-justify justify-center">
            <p className="text-sm font-light">{created}</p>
            <h2 className="self-start text-lg text-nowrap font-medium" >{title}</h2>
            <p className="text-sm text-gray-300">{description}</p>
                <div className="flex flex-wrap gap-4">
                    {languages.map((l, i) => (
                        <div
                            key={l.name + i}
                            className="bg-pink-800 rounded-md py-1 px-2"
                        >
                            {l.name}
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
}
