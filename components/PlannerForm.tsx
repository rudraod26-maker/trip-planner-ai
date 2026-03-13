"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CityAutocomplete from "./CityAutocomplete";

export default function PlannerForm() {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [days, setDays] = useState("");
  const router = useRouter();
  const generateTrip = () => {

  router.push(
    `/trip-result?from=${from}&to=${to}&days=${days}`
  );

};

  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto">

      <CityAutocomplete
        placeholder="From"
        onSelect={(city) => setFrom(city)}
      />

      <CityAutocomplete
        placeholder="To"
        onSelect={(city) => setTo(city)}
      />

      <input
        placeholder="Number of Days"
        className="border rounded-lg p-3 w-full mb-4"
        onChange={(e) => setDays(e.target.value)}
      />

      <button
  onClick={generateTrip}
  className="bg-blue-600 text-white p-3 rounded-lg w-full"
>
  Generate Trip Plan
</button>

    </div>
  );
}