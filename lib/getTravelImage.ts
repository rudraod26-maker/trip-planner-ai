export function getTravelImage(query: string): string {

  const place = query
    .replace(/-/g, " ")
    .replace(/ itinerary| travel guide| best time to visit/gi, "")
    .trim();

  return `https://picsum.photos/seed/${encodeURIComponent(place)}/1200/600`;

}