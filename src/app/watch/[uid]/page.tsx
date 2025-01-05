import RtWatch from "./rc-watch";

export default async function Page({ params }: Params) {
  return (
    <main className=" flex-1 p-4">
      <RtWatch hardcore={params.uid} />
    </main>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
