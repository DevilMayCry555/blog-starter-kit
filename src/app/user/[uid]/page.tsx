import Container from "@/app/_components/container";

export default async function User({ params }: Params) {
  return (
    <main>
      <Container>
        <div>个人中心 -- {decodeURIComponent(params.uid)}</div>
      </Container>
    </main>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
