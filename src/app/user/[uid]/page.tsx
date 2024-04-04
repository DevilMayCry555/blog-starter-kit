import Container from "@/app/_components/container";

export default async function User({ params }: Params) {
  const [uid, name] = decodeURIComponent(params.uid).split("&");
  return (
    <main>
      <Container>
        <div title={uid}>个人中心 -- {name}</div>
      </Container>
    </main>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
