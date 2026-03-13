import { coordinates } from "./coordinates";
import { calculateDistance } from "./distance";

export function optimizeRoute(places: string[]) {

  if (places.length <= 2) return places;

  const start = places[0];
  const remaining = places.slice(1);

  const optimized = [start];

  let current = start;

  while (remaining.length > 0) {

    let closestIndex = 0;
    let closestDistance = Infinity;

    remaining.forEach((place, index) => {

      const coord1 = coordinates[current];
      const coord2 = coordinates[place];

      if (!coord1 || !coord2) return;

      const dist = calculateDistance(
        coord1.lat,
        coord1.lng,
        coord2.lat,
        coord2.lng
      );

      if (dist < closestDistance) {
        closestDistance = dist;
        closestIndex = index;
      }

    });

    const nextPlace = remaining.splice(closestIndex, 1)[0];

    optimized.push(nextPlace);
    current = nextPlace;

  }

  return optimized;
}