'use client'
import { BlogPostCard } from "./BlogPostCard";
import { BlogMetadata } from "@/utils/types";


type BlogCardListProps = {
    cards: BlogMetadata[];
    cardsPerRow: number;
}

export function BlogCardList({cards, cardsPerRow} : BlogCardListProps) {
    return ( 
      <div className={`grid grid-flow-row lg:grid-flow-col  lg:grid-cols-${cardsPerRow}` + " gap-8"}>
        {cards.map((c)=>(
            <BlogPostCard key={c.title} header={c.title} undertext={c.description} slug={c.slug}></BlogPostCard>
        ))}
      </div>
    )
}
