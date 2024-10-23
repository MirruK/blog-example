import { ProjectCardType } from "@/utils/types";
import { ProjectCard } from "./ProjectCard";

type ProjectCardListProps = {
  cards: (ProjectCardType | null)[];
};

export function ProjectCardList({ cards }: ProjectCardListProps) {
  return (
    <div className={"flex flex-row justify-center flex-wrap gap-8 p-4"}>
      {cards &&
        cards.map(
          (c) => c && <ProjectCard key={c.githubUrl} project={c}></ProjectCard>
        )}
    </div>
  );
}
