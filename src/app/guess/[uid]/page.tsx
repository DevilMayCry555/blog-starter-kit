import Container from "@/app/_components/container";
import { fetchArt, fetchGuesses, fetchUser } from "@/lib/sql";
import { notFound } from "next/navigation";
import Image from "next/image";
import BaseForm from "@/app/_components/base-form";

export default async function Draw({ params }: any) {
  // 未登录
  const userinfo = await fetchUser();
  if (!userinfo) {
    return notFound();
  }
  const roomid = decodeURIComponent(params.uid);
  const { uid: userid } = userinfo;
  const detail = await fetchArt(roomid);
  if (!detail) {
    return notFound();
  }
  const { content: src, answer, isOwn, isDone } = detail;
  // console.log(isOwn, isDone);
  return (
    <main>
      <Container>
        <Image src={src} alt="tyd" width={309} height={500} />
        <hr />
        <br />
        <Bottom
          finish={answer}
          done={isDone}
          mine={isOwn}
          roomid={roomid}
          userid={userid}
        />
      </Container>
    </main>
  );
}
const Bottom = async ({
  finish = false,
  done = false,
  mine = false,
  roomid = "",
  userid = "",
}) => {
  if (finish) {
    // 公布答案后
    const { rows } = await fetchGuesses(roomid);
    return (
      <div>
        答案：
        <div>{finish}</div>
        参与：
        {rows.map((row) => {
          const { user_id, content, win } = row;
          return (
            <div key={user_id}>
              {content} {!!win && "√"}
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
      columns: [
        ...columns,
        {
          field: "answer",
          label: "正确答案",
          type: "input",
        },
        {
          field: "uid",
          label: "uid",
          type: "input",
          init: roomid,
          hidden: true,
        },
      ],
      text: "公布答案",
    };
    return <BaseForm {...formProps} />;
  } else if (done) {
    const { rows } = await fetchGuesses(roomid);
    return (
      <div>
        {rows.map((row) => {
          const { user_id, content } = row;
          return <div key={user_id}>{content}</div>;
        })}
      </div>
    );
  } else {
    // 观者侧
    const createProps = {
      action: "/api/draw",
      method: "guess",
      columns: [
        {
          field: "content",
          label: "你猜",
          type: "input",
        },
        {
          field: "uid",
          label: "uid",
          type: "input",
          init: roomid,
          hidden: true,
        },
        {
          field: "userid",
          label: "userid",
          type: "input",
          init: userid,
          hidden: true,
        },
      ],
    };
    return <BaseForm {...createProps} />;
  }
};
