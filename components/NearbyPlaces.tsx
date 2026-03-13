type Place = {
  name: string;
  distance: number;
};

type Props = {
  places: Place[];
};

export default function NearbyPlaces({ places }: Props) {

  if (!places || places.length === 0) return null;

  return (

    <div className="mt-8 bg-blue-50 p-6 rounded-xl">

      <h2 className="text-xl font-semibold mb-4">
        Nearby Places You Can Visit
      </h2>

      <ul className="space-y-2">

        {places.map((place, index) => (

          <li key={index} className="flex justify-between">

            <span>📍 {place.name}</span>
            <span className="text-gray-500">
              {place.distance} km
            </span>

          </li>

        ))}

      </ul>

    </div>

  );

}