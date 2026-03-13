import Link from "next/link";
import { routes } from "@/lib/routes";

export default function TripsPage(){

return(

<main className="max-w-5xl mx-auto px-6 py-16">

<h1 className="text-4xl font-bold mb-10">
Popular Trip Routes
</h1>

<div className="grid md:grid-cols-2 gap-6">

{routes.map((route)=>{

const slug = `${route.from}-to-${route.to}`;

const title = `${route.from} to ${route.to} trip`
.replace(/\b\w/g,(c)=>c.toUpperCase());

return(

<Link
key={slug}
href={`/trips/${slug}`}
className="block border p-6 rounded-xl hover:shadow-md"
>

<h2 className="text-xl font-semibold">
{title}
</h2>

</Link>

);

})}

</div>

</main>

);

}