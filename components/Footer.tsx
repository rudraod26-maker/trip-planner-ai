import Link from "next/link";

export default function Footer() {

return (

<footer className="bg-gray-100 border-t mt-16">

<div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

<div>
<h3 className="font-semibold mb-3">AI Trip Planner</h3>
<p className="text-gray-600 text-sm">
Plan your trips instantly using our AI travel planner. Discover itineraries, travel guides and destination insights.
</p>
</div>

<div>
<h3 className="font-semibold mb-3">Explore</h3>
<ul className="space-y-2 text-sm">

<li>
<Link href="/">Home</Link>
</li>

<li>
<Link href="/blog">Travel Guides</Link>
</li>

<li>
<Link href="/destinations">Destinations</Link>
</li>

</ul>
</div>

<div>
<h3 className="font-semibold mb-3">Popular Guides</h3>
<ul className="space-y-2 text-sm">

<li>
<Link href="/blog/manali-3-day-itinerary">
Manali Itinerary
</Link>
</li>

<li>
<Link href="/blog/goa-4-day-itinerary">
Goa Travel Guide
</Link>
</li>

<li>
<Link href="/blog/3-day-varanasi-itinerary">
Varanasi Itinerary
</Link>
</li>

</ul>
</div>

<div>
<h3 className="font-semibold mb-3">Legal</h3>
<ul className="space-y-2 text-sm">

<li>
<Link href="/privacy-policy">Privacy Policy</Link>
</li>

<li>
<Link href="/terms">Terms of Service</Link>
</li>

<li>
<Link href="/disclaimer">Disclaimer</Link>
</li>

</ul>
</div>

</div>

<div className="border-t text-center text-sm text-gray-600 py-4">

© {new Date().getFullYear()} AI Trip Planner. All rights reserved.

</div>

</footer>

);

}