import { Link } from "@nextui-org/react";

// const types = [];

const books = {
  104016: "怪谈游戏设计师",
};

export default async function Books() {
  return (
    <main className=" flex-1 flex flex-col">
      {Object.entries(books).map((it) => (
        <Link key={it[0]} href={`/books/${it[0]}`}>
          {it[1]}
        </Link>
      ))}
    </main>
  );
}
