"use client";

import { useEffect, useState } from "react";

export default function TableOfContents(){

const [headings,setHeadings] = useState<
{ id:string; text:string }[]
>([]);

useEffect(()=>{

const elements = Array.from(
document.querySelectorAll("article h2")
) as HTMLHeadingElement[];

const items = elements.map(el=>({
id:el.id,
text:el.innerText
}));

setHeadings(items);

},[]);

if(!headings.length) return null;

return(

<div className="border rounded-xl p-5 bg-gray-50">

<h3 className="font-semibold mb-4">
On this page
</h3>

<ul className="space-y-3 text-sm">

{headings.map(h=>(
<li key={h.id}>

<a
href={`#${h.id}`}
className="text-gray-700 hover:text-blue-600"
>

{h.text}

</a>

</li>
))}

</ul>

</div>

);

}