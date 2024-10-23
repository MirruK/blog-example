"use client";
import { BlogPostCard } from "./BlogPostCard";
import { BlogMetadata } from "@/utils/types";

type BlogCardListProps = {
  cards: BlogMetadata[];
};

export function BlogCardList({ cards }: BlogCardListProps) {
  return (
    <div className={"flex flex-row justify-center flex-wrap gap-8 p-4"}>
      {cards.map((c) => (
        <BlogPostCard
          key={c.title}
          header={c.title}
          undertext={c.description}
          slug={c.slug}
        ></BlogPostCard>
      ))}
    </div>
  );
}
