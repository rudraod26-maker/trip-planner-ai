import { getBlogSlugs } from "./getBlogSlugs";

export function getRelatedPosts(currentSlug: string) {

const slugs = getBlogSlugs();

const related = slugs
.filter((slug)=> slug !== currentSlug)
.slice(0,4);

return related;

}