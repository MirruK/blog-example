import { ProjectCardType } from "@/utils/types";
import Link from "next/link";

export function ProjectCard({ project }: { project: ProjectCardType }) {
    return (
        <Link
            href={`https://${project.githubLink}`}
            target="_blank"
            rel="noopener"
            className="flex flex-[0_1_46%] flex-col min-w-[300px] gap-8 p-8 pb-16 pt-8 bg-slate-500 border-2 border-sky-500 rounded hover:shadow-sky-700 hover:shadow-xl"
        >
            <div className="flex self-center flex-col bg-slate-800 gap-12">
                <div className="flex flex-col gap-4 p-8 border-b-2 border-sky-200">
                    <h1 className="text-xl">{project.title}</h1>
                    <p className="text-sm">{project.description}</p>
                </div>
            </div>
        </Link>
    );
}
