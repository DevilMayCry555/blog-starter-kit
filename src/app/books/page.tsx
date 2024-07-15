import { Link } from "@nextui-org/react";

const books = {
  104016: "怪谈游戏设计师",
  110089: "天才俱乐部",
  113355: "剑出衡山",
  99079: "谁让他修仙的！",
};

export default async function Books() {
  return (
    <main className=" m-auto flex flex-col">
      <div>武侠仙侠</div>
      {Object.entries(books)
        .filter((it) => ["99079", "113355"].includes(it[0]))
        .map((it) => (
          <Link className=" my-4" key={it[0]} href={`/books/${it[0]}`}>
            {it[1]}
          </Link>
        ))}
      <div>科幻</div>
      {Object.entries(books)
        .filter((it) => ["110089"].includes(it[0]))
        .map((it) => (
          <Link className=" my-4" key={it[0]} href={`/books/${it[0]}`}>
            {it[1]}
          </Link>
        ))}
      <div>悬疑</div>
      {Object.entries(books)
        .filter((it) => ["104016"].includes(it[0]))
        .map((it) => (
          <Link className=" my-4" key={it[0]} href={`/books/${it[0]}`}>
            {it[1]}
          </Link>
        ))}
    </main>
  );
}
