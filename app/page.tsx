import Link from "next/link";

export default function Home() {

return (

<main>

{/* HERO */}

<section className="max-w-5xl mx-auto px-6 py-16 text-center">

<h1 className="text-4xl font-bold mb-4">
Plan Your Perfect India Trip
</h1>

<p className="text-gray-600 mb-10">
AI powered travel itineraries, routes and budget planning
</p>

<div
id="planner"
className="bg-white p-8 rounded-xl shadow max-w-xl mx-auto"
>

<form
action="/trip-result"
method="GET"
className="space-y-4"
>

<input
name="from"
placeholder="From"
className="border p-3 w-full rounded"
/>

<input
name="to"
placeholder="To"
className="border p-3 w-full rounded"
/>

<input
name="days"
placeholder="Number of Days"
className="border p-3 w-full rounded"
/>

<button
className="bg-blue-600 text-white px-4 py-3 rounded w-full hover:bg-blue-700"
>

Generate Trip Plan

</button>

</form>

</div>

</section>



{/* POPULAR DESTINATIONS */}

<section className="max-w-6xl mx-auto px-6 py-16">

<h2 className="text-3xl font-bold mb-8 text-center">
Popular Destinations
</h2>

<div className="grid md:grid-cols-3 gap-8">

<Link
href="/destinations/goa"
className="border rounded-xl p-6 hover:shadow-md"
>

<h3 className="text-xl font-semibold mb-2">
Goa
</h3>

<p className="text-gray-600">
Beaches, nightlife and Portuguese heritage.
</p>

</Link>

<Link
href="/destinations/manali"
className="border rounded-xl p-6 hover:shadow-md"
>

<h3 className="text-xl font-semibold mb-2">
Manali
</h3>

<p className="text-gray-600">
Snow mountains and adventure sports.
</p>

</Link>

<Link
href="/destinations/varanasi"
className="border rounded-xl p-6 hover:shadow-md"
>

<h3 className="text-xl font-semibold mb-2">
Varanasi
</h3>

<p className="text-gray-600">
Spiritual city famous for the Ganga Aarti.
</p>

</Link>

</div>

</section>



{/* FEATURED GUIDES */}

<section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">

<h2 className="text-3xl font-bold mb-8 text-center">
Featured Travel Guides
</h2>

<div className="grid md:grid-cols-3 gap-8">

<Link
href="/blog/manali-3-day-itinerary"
className="border rounded-xl p-6 bg-white hover:shadow-md"
>

<h3 className="font-semibold mb-2">
Manali 3 Day Itinerary
</h3>

<p className="text-gray-600">
Plan the perfect 3 day trip to Manali.
</p>

</Link>

<Link
href="/blog/goa-4-day-itinerary"
className="border rounded-xl p-6 bg-white hover:shadow-md"
>

<h3 className="font-semibold mb-2">
Goa 4 Day Itinerary
</h3>

<p className="text-gray-600">
Explore beaches and nightlife in Goa.
</p>

</Link>

<Link
href="/blog/3-day-varanasi-itinerary"
className="border rounded-xl p-6 bg-white hover:shadow-md"
>

<h3 className="font-semibold mb-2">
Varanasi 3 Day Itinerary
</h3>

<p className="text-gray-600">
Complete guide to explore Varanasi.
</p>

</Link>

</div>

</section>



{/* WHY USE AI PLANNER */}

<section className="max-w-5xl mx-auto px-6 py-16 text-center">

<h2 className="text-3xl font-bold mb-8">
Why Use AI Trip Planner
</h2>

<div className="grid md:grid-cols-3 gap-8">

<div>

<h3 className="font-semibold mb-2">
Smart Itineraries
</h3>

<p className="text-gray-600">
Generate optimized travel itineraries instantly.
</p>

</div>

<div>

<h3 className="font-semibold mb-2">
Budget Planning
</h3>

<p className="text-gray-600">
Estimate travel costs and plan trips efficiently.
</p>

</div>

<div>

<h3 className="font-semibold mb-2">
Discover Destinations
</h3>

<p className="text-gray-600">
Explore new places and travel guides.
</p>

</div>

</div>

</section>

</main>

);

}