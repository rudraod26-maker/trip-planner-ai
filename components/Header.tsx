import Link from "next/link";

export default function Header() {

return (

<header className="border-b bg-white sticky top-0 z-50">

<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

<Link href="/" className="text-xl font-bold text-blue-600">
AI Trip Planner
</Link>

<nav className="hidden md:flex items-center gap-6 text-sm">

<Link href="/" className="hover:text-blue-600">
Home
</Link>

<Link href="/blog" className="hover:text-blue-600">
Blog
</Link>

<Link href="/destinations" className="hover:text-blue-600">
Destinations
</Link>

<Link href="/about" className="hover:text-blue-600">
About
</Link>

<Link href="/contact" className="hover:text-blue-600">
Contact
</Link>

</nav>

<Link
href="/#planner"
className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
>
Start Planning
</Link>

</div>

</header>

);

}