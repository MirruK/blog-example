import { BlogPostCard } from "./BlogPostCard";
import { BlogMetadata } from "@/utils/types";


type BlogCardListProps = {
    cards: (BlogMetadata & {slug: string})[];
    cardsPerRow?: number;
}

export function BlogCardList({cards} : BlogCardListProps) {
  // TODO: Let the user set cardsPerRow... somehow
  const cardsPerRow = 3;
    return ( 
      <div className={`grid grid-flow-col grid-cols-${cardsPerRow}` + " gap-8"}>
        {cards.map((c)=>(
            <BlogPostCard key={c.title} header={c.title} undertext={c.description} slug={c.slug}></BlogPostCard>
        ))}
      </div>
    )
}
