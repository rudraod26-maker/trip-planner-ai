"use client";

import { useSearchParams } from "next/navigation";

export default function TripResultClient() {

  const params = useSearchParams();

  const from = params.get("from");
  const to = params.get("to");
  const days = params.get("days");

  return (

    <div className="max-w-3xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-6">
        Trip Plan
      </h1>

      <p className="mb-2">
        <strong>From:</strong> {from}
      </p>

      <p className="mb-2">
        <strong>Destination:</strong> {to}
      </p>

      <p className="mb-6">
        <strong>Days:</strong> {days}
      </p>

      <p className="text-gray-600">
        Your AI trip plan will appear here.
      </p>

    </div>

  );

}