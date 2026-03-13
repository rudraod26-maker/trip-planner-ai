import Link from "next/link";
import { getBlogSlugs } from "@/lib/getBlogSlugs";

export default function BlogPage() {

  const slugs = getBlogSlugs();

  return (

    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-10">
        Travel Guides & Itineraries
      </h1>

      <div className="grid gap-6">

        {slugs.map((slug) => {

          const title = slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (

            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="block p-6 border rounded-xl hover:shadow-md transition"
            >

              <h2 className="text-2xl font-semibold">
                {title}
              </h2>

            </Link>

          );

        })}

      </div>

    </main>

  );

}