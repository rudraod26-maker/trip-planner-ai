import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function generateBlog(topic: string) {

  const prompt = `
Write a detailed SEO travel blog.

Topic: ${topic}

Include sections:

Introduction
Best time to visit
Top places to visit
Day-wise itinerary
Travel tips
Budget tips

Write in clear travel blog style.
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "user", content: prompt }
    ]
  });

  return completion.choices[0].message.content;

}