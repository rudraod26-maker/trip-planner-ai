import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getBlogSlugs() {

  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((name) => name.replace(".md", ""));

}