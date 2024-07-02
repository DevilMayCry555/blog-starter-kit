import Container from "@/app/_components/container";
import { fetchArt, fetchGuesses, fetchUser } from "@/lib/sql";
import { notFound } from "next/navigation";
import BaseForm from "@/app/_components/base-form";
import { Image, Divider } from "@nextui-org/react";

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
    <main className=" flex-1">
      <Container>
        <Image src={src} alt="tyd" width={360} />
        <Divider />
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
  const { rows } = await fetchGuesses(roomid);
  // console.log(rows);
  if (finish) {
    // 已结束
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
    // 公布答案
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
    // 参与后
    return (
      <div>
        {rows.map((row) => {
          const { user_id, content } = row;
          return <div key={user_id}>{content}</div>;
        })}
      </div>
    );
  } else {
    // 未参与
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
