type Props = {
  params: {
    slug: string;
  };
};

export default async function ItineraryPage({ params }: Props) {

  const slug = params?.slug
  ?.split("-")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ") || "Travel Itinerary";

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6 capitalize">
        {slug}
      </h1>

      <p className="text-gray-700">
        Complete travel itinerary for {slug}.
      </p>

    </main>
  );
}