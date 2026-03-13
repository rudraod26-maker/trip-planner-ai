import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import { blogTopics } from "../lib/blogTopics.js";

dotenv.config({ path: ".env.local" });

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

async function generateBlog(topic) {

  const prompt = `
Write a detailed SEO optimized travel blog of about 1200 words.

Topic: ${topic}

Requirements:
- Minimum 1200 words
- Structured headings
- SEO optimized
- Friendly travel writing style

Include sections:

Introduction
Best time to visit
How to reach
Top places to visit
Day-wise itinerary
Travel tips
Budget tips
Conclusion
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }]
  });

  return completion.choices[0].message.content;

}

async function run() {

  const blogDir = path.join(process.cwd(), "content/blog");

  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  for (const topic of blogTopics) {

    const slug = topic
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");

    console.log("Generating:", topic);

    const content = await generateBlog(topic);

    if (!content) continue;

    const markdown = `
# ${topic}

${content}
`;

    const filePath = path.join(blogDir, `${slug}.md`);

    fs.writeFileSync(filePath, markdown);

    console.log("Saved:", slug);

  }

  console.log("All blogs generated successfully");

}

run();