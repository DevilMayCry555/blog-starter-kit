import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  const res = result
    .toString()
    // 照片墙样式
    .replaceAll("<p>photo wall<img", '<p class="photo-wall-p"><img');
  // console.log("res", res);
  return res;
}
