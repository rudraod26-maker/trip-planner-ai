import Link from "next/link";
import { destinations } from "@/lib/destinations";

type Destination = {
  slug: string;
  name: string;
  description: string;
};

export default function DestinationsPage() {

  const data = destinations as Destination[];

  return (

    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-10">
        Explore Destinations
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {data.map((dest) => (

          <Link
            key={dest.slug}
            href={`/destinations/${dest.slug}`}
            className="block p-6 border rounded-xl hover:shadow-md"
          >

            <h2 className="text-2xl font-semibold mb-2">
              {dest.name}
            </h2>

            <p className="text-gray-600">
              {dest.description}
            </p>

          </Link>

        ))}

      </div>

    </main>

  );

}