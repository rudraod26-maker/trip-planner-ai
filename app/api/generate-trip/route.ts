import { groq } from "@/lib/groq";
import { optimizeRoute } from "@/lib/optimizeRoute";

export async function POST(req: Request) {

  try {

    const { from, to, days } = await req.json();

    const route = optimizeRoute([from, to]);

    const prompt = `
Create a ${days}-day travel itinerary in India.

Optimized route:
${route.join(" → ")}

Include:

Trip overview
Best travel route
Day-wise itinerary
Budget estimate
Travel tips
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    return Response.json({
      tripPlan: completion.choices[0].message.content
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      { error: "Trip generation failed" },
      { status: 500 }
    );

  }

}