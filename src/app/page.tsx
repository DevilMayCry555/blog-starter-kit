import HomeList from "./_components/home-list";
import NewsList from "./_components/news-list";

const getNewsApi = (size: number) =>
  `https://www.gcores.com/gapi/v1/articles?page[limit]=${size}&page[offset]=0&sort=-published-at`;

export default async function Index() {
  const info = await fetch(getNewsApi(5)).then((res) => res.json());
  return (
    <main className=" flex-1 flex flex-col items-center overflow-hidden">
      <HomeList />
      <p>---</p>
      <NewsList data={info.data} />
    </main>
  );
}
