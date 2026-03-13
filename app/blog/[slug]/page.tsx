import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/getBlogPost";
import { getBlogSlugs } from "@/lib/getBlogSlugs";
import { getTravelImage } from "@/lib/getTravelImage";
import { getFaq } from "@/lib/getFaq";
import { getRelatedPosts } from "@/lib/getRelatedPosts";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params;

  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const description =
    `Complete travel guide for ${title}. Discover best places to visit, itinerary ideas, travel tips and budget planning.`;

  const url = `https://yourdomain.com/blog/${slug}`;

  return {
    title: `${title} | AI Trip Planner`,
    description,

    openGraph: {
      title,
      description,
      url,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    }
  };
}

type Props = {
params: Promise<{ slug: string }>;
};

export async function generateStaticParams(){

const slugs = getBlogSlugs();

return slugs.map((slug)=>({slug}));

}

export default async function BlogPost({params}:Props){

const {slug} = await params;

if(!slug){
notFound();
}

const post = await getBlogPost(slug);

if(!post){
notFound();
}

const title = slug
.replace(/-/g," ")
.replace(/\b\w/g,(c)=>c.toUpperCase());

const image = getTravelImage(slug);

const faq = getFaq(title);

const faqSchema = {
"@context":"https://schema.org",
"@type":"FAQPage",
"mainEntity": faq.map((f)=>({
"@type":"Question",
"name":f.question,
"acceptedAnswer":{
"@type":"Answer",
"text":f.answer
}
}))
};

const related = getRelatedPosts(slug);

return(

<main className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

  <Breadcrumbs
items={[
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: title }
]}
/>

<div className="md:col-span-3">

<h1 className="text-4xl font-bold mb-6">
{title}
</h1>

<img
src={image}
alt={title}
className="rounded-xl mb-8 w-full object-cover"
/>

<article
className="prose lg:prose-lg max-w-none"
dangerouslySetInnerHTML={{__html:post.contentHtml}}
/>

<aside className="hidden md:block">

<div className="sticky top-24">

<TableOfContents />

</div>

</aside>

{/* FAQ SECTION */}

<section className="mt-12">

<h2 className="text-2xl font-semibold mb-6">
Frequently Asked Questions
</h2>

<div className="space-y-6">

{faq.map((item,i)=>(
<div key={i}>

<h3 className="font-semibold">
{item.question}
</h3>

<p className="text-gray-600">
{item.answer}
</p>

</div>
))}

</div>

</section>

{/* PEOPLE ALSO SEARCH FOR */}

<section className="mt-16">

<h2 className="text-2xl font-semibold mb-6">
People Also Search For
</h2>

<div className="grid md:grid-cols-2 gap-4">

{related.map((slug)=>{

const title = slug
.replace(/-/g," ")
.replace(/\b\w/g,(c)=>c.toUpperCase());

return(

<Link
key={slug}
href={`/blog/${slug}`}
className="border p-4 rounded-lg hover:shadow-md"
>

{title}

</Link>

)

})}

</div>

</section>

{/* SCHEMA */}

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify(faqSchema)
}}
/>


</div>



</main>

);

}