import { notFound } from "next/navigation";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { getTravelImage } from "@/lib/getTravelImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {

  const parts = params.slug.split("-to-");

  const from = parts[0];
  const to = parts[1];

  const title =
    `${from} to ${to} trip`
    .replace(/\b\w/g,(c)=>c.toUpperCase());

  return {

    title: `${title} | Travel Guide`,
    description:
      `Plan your ${title}. Discover travel routes, itinerary ideas and tips for the perfect trip.`,

    openGraph: {
      title,
      description:
        `Plan your ${title} with travel tips and itinerary suggestions.`,
      type: "article"
    }

  };
}

type Props = {
params: Promise<{ slug: string }>
}

export default async function TripPage({ params }: Props){

const { slug } = await params;

const parts = slug.split("-to-");

if(parts.length !== 2){
notFound();
}

const from = parts[0];
const to = parts[1];

const routeExists = routes.find(
r => r.from === from && r.to === to
);

if(!routeExists){
notFound();
}

const title =
`${from} to ${to} trip`
.replace(/\b\w/g,(c)=>c.toUpperCase());

const image = getTravelImage(to);

return(

<main className="max-w-3xl mx-auto px-6 py-16">
    <Breadcrumbs
items={[
  { label: "Home", href: "/" },
  { label: "Trips", href: "/trips" },
  { label: title }
]}
/>

<h1 className="text-4xl font-bold mb-6">
{title}
</h1>

<img
src={image}
alt={title}
className="rounded-xl mb-8"
/>

<p className="mb-4">
Planning a trip from {from} to {to}? This guide helps you
discover travel options, itinerary ideas and budget tips.
</p>

<h2 className="text-2xl font-semibold mt-10 mb-4">
Suggested Itinerary
</h2>

<p className="mb-6">
Explore the major attractions in {to} with a well planned trip.
Visit popular landmarks, enjoy local cuisine and discover hidden gems.
</p>

<Link
href={`/?from=${from}&to=${to}&days=3`}
className="bg-blue-600 text-white px-5 py-3 rounded-lg"
>
Generate AI Trip Plan
</Link>

</main>

);

}