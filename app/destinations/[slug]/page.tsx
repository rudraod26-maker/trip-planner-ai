import { notFound } from "next/navigation";
import Link from "next/link";
import { destinations } from "@/lib/destinations";
import { getBlogSlugs } from "@/lib/getBlogSlugs";
import { getTravelImage } from "@/lib/getTravelImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params;

  const place = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${place} Travel Guide`,
    description:
      `Explore ${place} travel guide including top attractions, itinerary ideas and travel tips.`,

    openGraph: {
      title: `${place} Travel Guide`,
      description:
        `Explore ${place} travel guide including attractions and itinerary ideas.`,
      type: "article",
    },
  };
}

type Props = {
params: Promise<{ slug: string }>;
};

export default async function DestinationPage({ params }: Props) {

const { slug } = await params;

const destination = destinations.find(
(d) => d.slug === slug
);

if (!destination) {
notFound();
}

const blogs = getBlogSlugs();

const relatedBlogs = blogs.filter((blog) =>
blog.includes(slug)
);

const image = getTravelImage(destination.slug);

return (

<main className="max-w-5xl mx-auto px-6 py-16">

    <Breadcrumbs
items={[
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: destination.name }
]}
/>

<h1 className="text-4xl font-bold mb-6">
{destination.name}
</h1>

<img
src={image}
alt={destination.name}
className="rounded-xl mb-8"
/>

<p className="text-gray-700 mb-10">
{destination.description}
</p>

<h2 className="text-2xl font-semibold mb-6">
Travel Guides
</h2>

<div className="grid md:grid-cols-2 gap-6">

{relatedBlogs.map((blog) => {

const title = blog
.replace(/-/g, " ")
.replace(/\b\w/g, (c) => c.toUpperCase());

return (

<Link
key={blog}
href={`/blog/${blog}`}
className="block p-5 border rounded-xl hover:shadow-md"
>

<h3 className="text-lg font-semibold">
{title}
</h3>

</Link>

);

})}

</div>

</main>

);

}