import Container from "@/app/_components/container";
import { fetchArt, fetchGuesses } from "@/lib/sql";
import { notFound } from "next/navigation";
import Image from "next/image";
import BaseForm from "@/app/_components/base-form";

export default async function Draw({ params }: any) {
  const roomid = decodeURIComponent(params.uid);
  const detail = await fetchArt(roomid);
  if (!detail) {
    return notFound();
  }
  const { content: src, answer, isOwn } = detail;
  const Bottom = async ({ finish = false, mine = false }) => {
    if (finish) {
      // 公布答案后
      const { rows } = await fetchGuesses(roomid);
      return (
        <div>
          <div>答案：{finish}</div>
          {rows.map((row) => {
            const { user_id, content, win } = row;
            return (
              <div key={user_id}>
                {content} {!!Number(win) && "√"}
              </div>
            );
          })}
        </div>
      );
    } else if (mine) {
      // 作者侧
      const { rows } = await fetchGuesses(roomid);
      const columns = rows.map((row) => {
        const { user_id, content } = row;
        return {
          field: user_id,
          label: content,
          type: "checkbox",
        };
      });
      const formProps = {
        action: "/api/draw",
        method: "finish",
        columns,
        text: "公布答案",
      };
      return <BaseForm {...formProps} />;
    } else {
      // 观者侧
      const createProps = {
        action: "/api/draw",
        method: "create",
        columns: [
          {
            field: "content",
            label: "你猜",
            type: "input",
          },
        ],
      };
      return <BaseForm {...createProps} />;
    }
  };
  return (
    <main>
      <Container>
        <Image src={src} alt="tyd" width={309} height={500} />
        <Bottom finish={answer} mine={isOwn} />
      </Container>
    </main>
  );
}
