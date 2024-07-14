import { Link } from "@nextui-org/react";

// const types = [];

const books = {
  104016: "怪谈游戏设计师",
  110089: "天才俱乐部",
  113355: "剑出衡山",
  99079: "谁让他修仙的！",
  32276: "第一次魔法世界大战",
  114434: "从婴儿开始入道",
};

export default async function Books() {
  return (
    <main className=" m-auto flex flex-col">
      {Object.entries(books).map((it) => (
        <Link className=" my-4" key={it[0]} href={`/books/${it[0]}`}>
          {it[1]}
        </Link>
      ))}
    </main>
  );
}
