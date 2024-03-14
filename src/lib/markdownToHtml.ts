import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  const res = result
    .toString()
    // 照片墙
    .replaceAll("<p>pw ", '<p class="photo-wall">')
    .replaceAll(" l<img", '<img class="photo-l"')
    .replaceAll(" r<img", '<img class="photo-r"')
    .replaceAll('y<img class="', '<img class="photo-y ')
    .replaceAll('x<img class="', '<img class="photo-x ')
  // console.log("res", res);
  return res;
}
