import { Suspense } from "react";
import TripResultClient from "@/components/TripResultClient";

export default function TripResultPage() {

  return (

    <Suspense fallback={<div className="p-10">Loading trip...</div>}>

      <TripResultClient />

    </Suspense>

  );

}