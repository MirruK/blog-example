import { ProjectCardType } from "@/utils/types";
import Link from "next/link";

// TODO: Fix styling and push
export function ProjectCard({ project }: { project: ProjectCardType }) {
    const languagesString = project.languages
        .reduceRight((acc, obj) => acc + ", " + obj.name, "")
        .slice(2);
    return (
        <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener"
            className="flex flex-[0_1_46%] flex-col min-w-[300px] max-w-[500px] gap-8 p-6 lg:p-8 pt-8 bg-slate-900 border-2 border-sky-300 rounded hover:shadow-sky-700 hover:shadow-xl"
        >
            <div className="flex flex-col gap-4 p-8">
                <h1 className="text-xl">{project.title}</h1>
                <p className="text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                    {project.languages.map((l, i) => (
                        <div
                            key={l.name + i}
                            className="bg-pink-800 rounded-md p-1"
                        >
                            {l.name}
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
}
