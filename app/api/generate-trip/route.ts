import { NextResponse } from "next/server";
import { groq } from "@/lib/groq";

const tripCache = new Map();

export async function POST(req: Request) {

  const { from, to, days } = await req.json();

  const cacheKey = `${from}-${to}-${days}`;

  if (tripCache.has(cacheKey)) {
    return NextResponse.json({
      tripPlan: tripCache.get(cacheKey)
    });
  }

  const prompt = `
Create a ${days}-day travel itinerary from ${from} to ${to}.
Include daily activities and major attractions.
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "user", content: prompt }
    ]
  });

  const tripPlan =
    completion.choices[0]?.message?.content || "No plan generated.";

  tripCache.set(cacheKey, tripPlan);

  return NextResponse.json({ tripPlan });

}