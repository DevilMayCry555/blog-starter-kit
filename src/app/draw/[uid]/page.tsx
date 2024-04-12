import Container from "@/app/_components/container";
import { fetchArt } from "@/lib/sql";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Draw({ params }: any) {
  const roomid = decodeURIComponent(params.uid);
  const detail = await fetchArt(roomid);
  if (!detail) {
    return notFound();
  }
  const { content } = detail;
  return (
    <main>
      <Container>
        <Image src={content} alt="tyd" width={309} height={500} />
      </Container>
    </main>
  );
}
