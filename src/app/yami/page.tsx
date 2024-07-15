import { ff } from "@/lib/api";
import BaseRadioPlayer from "../_components/base-radio-player";
import BaseList from "../_components/base-list";
import { Link } from "@nextui-org/react";
import BaseForm from "../_components/base-form";
import Yamimage from "./yamimage";
import BaseModal from "../_components/base-modal";
import { cookies } from "next/headers";
//
interface Video {
  code: string;
  cover64: string;
  title: string;
  exclusive: boolean;
  actors: Actor[];
  onshelf_tm: number;
  [k: string]: any;
}
interface resProps {
  carousel_videos: Video[];
  recommend_videos: Video[];
  video: Video;
}
interface Actor {
  sid: number;
  birthday: number;
  birth: number;
  cover64: string;
  cup: string;
  name: string;
  video_count: number;
}

const backProp = {
  action: "/yami",
  method: "",
  text: "BACK",
  columns: [],
};
const searchProp = {
  action: "/yami",
  method: "",
  text: "GO",
  columns: [
    {
      field: "q",
      label: "关键字",
      type: "input",
    },
  ],
};
const actorProp = ({ name, sid }: any) => ({
  action: `/yami`,
  method: "",
  form: { sid },
  text: name,
  columns: [],
});
const Desc = ({ code, title, cover64, onshelf_tm }: any) => {
  return (
    <>
      {code} {title}
      <Yamimage url={cover64} />
      {new Date(onshelf_tm * 1000).toLocaleDateString()}
    </>
  );
};
// login
const loginProp = {
  action: "/api/login",
  method: "yami",
  text: "login",
  columns: [
    {
      field: "account",
      label: "email",
      type: "input",
      init: "1061471799@qq.com",
    },
    {
      field: "password",
      label: "password",
      type: "input",
      init: "123456",
    },
    {
      field: "imgCode",
      label: "code",
      type: "input",
    },
  ],
};
// https://apiw5.xn--pssa1886a.com/vw3/code
// https://apiw5.xn--pssa1886a.com/vw3/login?platform=pwa&version=1.0.0 account imgCode password
// https://apiw5.xn--pssa1886a.com/vw3/202406/mission/sign
export default async function Yami({ searchParams }: any) {
  const { id = "", sid = "", to = 0, sort = "0", q = "" } = searchParams;
  // const { token } = await ff("https://apiw2.eaeja.com/vw3/visitor");
  const token = cookies().get("yami-token")?.value;
  if (!token) {
    const tcode = await fetch("https://apiw5.xn--pssa1886a.com/vw3/code", {
      cache: "no-store",
    }).then((res) => res.text());
    return (
      <main className=" m-auto">
        <img src={`data:image/png;base64,${tcode}`} alt="code" />
        <BaseForm {...loginProp} />
      </main>
    );
  }

  // 1
  if (!id && !sid && !q && sort === "0") {
    const categorys = ["全部", "最热", "畅销", "最新"].map((it, idx) => ({
      action: "/yami",
      method: "",
      text: it,
      form: { sort: idx + 1 },
      columns: [],
    }));
    return (
      <main className=" m-auto">
        <div className=" flex pb-10">
          {categorys.map((prp, idx) => (
            <BaseForm key={idx} {...prp} />
          ))}
        </div>
        <BaseForm {...searchProp} />
      </main>
    );
  }
  // search
  if (q) {
    const {
      // actor,
      videos,
      next,
    }: { next: number; videos: Video[]; actor: Actor } = await ff(
      "https://apiw2.eaeja.com/vw3/search",
      {
        actor_type: "long",
        next: to,
        q,
      },
      token
    );
    // console.log(actor);

    return (
      <main className=" flex-1">
        <BaseList
          list={videos
            .filter((it) => !it.exclusive)
            .map((it) => ({
              label: `/yami?id=${it.code}`,
              desc: <Desc {...it} />,
              // value: it.code,
            }))}
        />
        {next > 0 && (
          <div className=" text-center py-2">
            <a href={`/yami?q=${q}&to=${next}`} target="_blank">
              next {next}
            </a>
          </div>
        )}
        <div className=" fixed bottom-2 right-2">
          <BaseForm {...backProp} />
        </div>
      </main>
    );
  }
  // 3
  if (sid) {
    const {
      // actor,
      videos,
      next,
    }: { next: number; videos: Video[]; actor: Actor } = await ff(
      `https://apiw2.eaeja.com/vw3/actor/${sid}/videos`,
      {
        actor_type: "long",
        next: to,
      },
      token
    );
    // console.log(actor);

    return (
      <main className=" flex-1">
        <BaseList
          list={videos
            .filter((it) => !it.exclusive)
            .map((it) => ({
              label: `/yami?id=${it.code}`,
              desc: <Desc {...it} />,
              // value: it.code,
            }))}
        />
        {next > 0 && (
          <div className=" text-center py-2">
            <a href={`/yami?sid=${sid}&to=${next}`} target="_blank">
              next {next}
            </a>
          </div>
        )}
        <div className=" fixed bottom-2 right-2">
          <BaseForm {...backProp} />
        </div>
      </main>
    );
  }
  // 2
  if (!id) {
    const girls: { actors: Actor[]; next: number } = await fetch(
      "https://apiw2.eaeja.com/vw3/category/actors",
      {
        method: "POST",
        body: JSON.stringify({
          actor_type: "long",
          age: "ALL",
          category: sort, // 1全部2最热3畅销4最新
          cup: "ALL",
        }),
        headers: {
          "Access-Token": `Bearer ${token}`,
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    ).then((res) => res.json());
    // console.log(girls);
    // const imgs = await Promise.all(
    //   girls.actors.map((it) => getBase64(it.cover64))
    // );
    return (
      <main className=" flex-1 p-2 overflow-hidden">
        {girls.actors.map((actor) => (
          <div key={actor.sid} className=" float-left m-2">
            <Link className=" text-sm" href={`/yami?sid=${actor.sid}`}>
              <Yamimage
                url={actor.cover64}
                name={actor.name}
                desc={`${new Date(actor.birth * 1000).toLocaleDateString()} ${
                  actor.cup
                } ${actor.video_count}`}
              />
            </Link>
          </div>
        ))}
        <div className=" fixed bottom-2 right-2">
          <BaseForm {...backProp} />
        </div>
      </main>
    );
  }
  // 4
  const res: resProps = await ff(
    `https://apiw2.eaeja.com/vw3/video/${id}`,
    {
      cdn: "tc",
    },
    token
  );
  const {
    carousel_videos,
    recommend_videos,
    video: { sources, actors = [], title },
  } = res;
  // console.log(res.video);
  return (
    <main className=" flex-1 p-4">
      <h1 className=" text-3xl font-bold tracking-tighter leading-tight">
        {id}
      </h1>
      <div>{title}</div>
      {Object.keys({ ...sources })
        .filter((it) => !!sources[it])
        .map((it, idx) => (
          <BaseRadioPlayer key={idx} url={`${sources[it]}`} />
        ))}

      <h1 className=" text-3xl font-bold tracking-tighter leading-tight">
        recommend_videos
      </h1>
      <BaseList
        list={recommend_videos
          .filter((it) => !it.exclusive)
          .map((it) => ({
            label: `/yami?id=${it.code}`,
            desc: <Desc {...it} />,
            // value: it.code,
          }))}
      />
      <h1 className=" text-3xl font-bold tracking-tighter leading-tight">
        carousel_videos
      </h1>
      <BaseList
        list={carousel_videos
          .filter((it) => !it.exclusive)
          .map((it) => ({
            label: `/yami?id=${it.code}`,
            desc: <Desc {...it} />,
            // value: it.code,
          }))}
      />

      <div className=" fixed bottom-2 right-2 z-10">
        <BaseModal action="JOIN" title="actors">
          {actors.map((it, idx) => (
            <div key={idx} className=" my-2 flex ">
              <Yamimage url={it.cover64} name=" " />
              <BaseForm {...actorProp(it)} />
            </div>
          ))}
        </BaseModal>
        <BaseForm {...backProp} />
      </div>
    </main>
  );
}
