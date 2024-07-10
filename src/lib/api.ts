import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { qstr } from "./utils";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // const info = fs.statSync(fullPath);
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug: realSlug,
    content,
    // date: info.mtime.toISOString(),
  } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
export const ff = (url: string, search?: { [k: string]: any }) =>
  fetch(qstr(url, { ...search }), { cache: "no-store" }).then((res) =>
    res.json()
  );
