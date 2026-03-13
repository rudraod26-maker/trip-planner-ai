"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

import { coordinates } from "@/lib/coordinates";
import { calculateBudget } from "@/lib/budget";
import { parseItinerary } from "@/lib/parseItinerary";
import { nearbyPlaces } from "@/lib/nearbyPlaces";

import DayCard from "@/components/DayCard";
import NearbyPlaces from "@/components/NearbyPlaces";

const RouteMap = dynamic(() => import("@/components/RouteMap"), {
  ssr: false,
});

export default function TripResult() {

  const params = useSearchParams();

  const from = params.get("from") || "";
  const to = params.get("to") || "";
  const days = params.get("days") || "1";

  const [tripPlan, setTripPlan] = useState("");
  const [loading, setLoading] = useState(true);

  const daysNumber = parseInt(days);

  const budget = calculateBudget(daysNumber);

  const nearby = nearbyPlaces[to] || [];

  useEffect(() => {

    const fetchTrip = async () => {

      try {

        const res = await fetch("/api/generate-trip", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ from, to, days }),
        });

        const data = await res.json();

        setTripPlan(data.tripPlan);

      } catch (error) {

        console.error(error);
        setTripPlan("Failed to generate trip. Please try again.");

      } finally {

        setLoading(false);

      }

    };

    fetchTrip();

  }, [from, to, days]);



  // Map locations
  const places = [from, to]
    .map((p) => ({
      name: p,
      ...(coordinates[p as keyof typeof coordinates] || {}),
    }))
    .filter((p) => p.lat);



  // Convert AI text into structured days
  const parsedDays = tripPlan ? parseItinerary(tripPlan) : [];


  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-6">
        Your AI Travel Plan
      </h1>


      <div className="bg-white p-6 rounded-xl shadow">

        <p><strong>From:</strong> {from}</p>
        <p><strong>Destination:</strong> {to}</p>
        <p><strong>Days:</strong> {days}</p>


        <p className="mt-4 text-blue-600 font-medium">
          Optimized Route: {from} → {to}
        </p>



        {/* Map */}

        {places.length > 0 && (
          <RouteMap places={places} />
        )}



        {/* Budget Section */}

        <div className="mt-8 bg-gray-100 p-6 rounded-xl">

          <h2 className="text-xl font-semibold mb-4">
            Estimated Trip Budget
          </h2>

          <div className="space-y-2">

            <p>Travel: ₹{budget.travelCost}</p>
            <p>Hotel: ₹{budget.hotelCost}</p>
            <p>Food: ₹{budget.foodCost}</p>
            <p>Local Transport: ₹{budget.transportCost}</p>

            <p className="font-bold mt-3 text-green-700">
              Total Estimated Cost: ₹{budget.total}
            </p>

          </div>

        </div>



        {/* Nearby Places */}

        <NearbyPlaces places={nearby} />



        {/* Day-wise Itinerary */}

        <div className="mt-8">

          <h2 className="text-xl font-semibold mb-4">
            Day-wise Itinerary
          </h2>

          {loading ? (

            <p className="text-gray-500">
              Generating your personalized travel plan...
            </p>

          ) : (

            <div className="grid md:grid-cols-2 gap-6">

              {parsedDays.map((day) => (
                <DayCard
                  key={day.day}
                  day={day.day}
                  activities={day.activities}
                />
              ))}

            </div>

          )}

        </div>

      </div>

    </main>
  );
}