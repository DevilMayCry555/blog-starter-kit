import { ff } from "@/lib/api";
import BaseRadioPlayer from "../_components/base-radio-player";
import BaseList from "../_components/base-list";
import { Link } from "@nextui-org/react";
import BaseForm from "../_components/base-form";
import Yamimage from "./yamimage";
import BaseModal from "../_components/base-modal";
import { cookies } from "next/headers";
import "./yami.css";
import { qstr } from "@/lib/utils";
//
interface Video {
  code: string;
  cover64: string;
  title: string;
  exclusive: boolean;
  actors: Actor[];
  onshelf_tm: number;
  genres: Category[];
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
interface Category {
  img64: string;
  sid: number;
  title: string;
  name: string;
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
const Footer = ({ to, ...rest }: any) => {
  return (
    <div className=" text-center py-2">
      <Link href={qstr("/yami", { to, ...rest })} target="_blank">
        next {to}
      </Link>
    </div>
  );
};
const Avs = ({ videos }: { videos: Video[] }) => {
  // console.log(videos);
  return (
    <>
      <input
        type="checkbox"
        name="tyd"
        id="yami-busmode"
        defaultChecked
        hidden
      />
      <div className=" yami-list">
        <BaseList
          list={videos
            .filter((it) => !it.exclusive)
            .map((it) => ({
              label: `/yami?id=${it.code}`,
              desc: <Desc {...it} />,
              // value: it.code,
            }))}
        />
      </div>
    </>
  );
};
const loginProp = (ct = "", image = "") => {
  console.log("need login", ct);
  return {
    action: "/api/login",
    method: "yami",
    text: "let me in",
    form: { ct },
    columns: [
      {
        field: "account",
        label: "account",
        type: "input",
        // init: "1061471799@qq.com",
      },
      {
        field: "password",
        label: "password",
        type: "password",
        // init: "123456",
      },
      {
        field: "imgCode",
        label: "code",
        type: "input",
        image,
      },
    ],
  };
};
//
export default async function Yami({ searchParams }: any) {
  const {
    id = "",
    sid = "",
    cid = "",
    gid = "",
    to = 0,
    sort = "",
    q = "",
  } = searchParams;
  // const { token } = await ff("https://apiw2.eaeja.com/vw3/visitor");
  const token = cookies().get("yami-token")?.value;
  // 登录
  if (!token) {
    let ct = "";
    const tcode = await fetch("https://apit.dns3log.com/vw3/code", {
      cache: "no-store",
    }).then((res) => {
      ct = res.headers.get("Cors-Cookie") ?? "";
      return res.text();
    });

    return (
      <main className=" m-auto">
        <BaseForm {...loginProp(ct, `data:image/png;base64,${tcode}`)} />
      </main>
    );
  }
  // 主页
  if (!id && !sid && !cid && !gid && !q && !sort) {
    const { categorys }: { categorys: Category[] } = await ff(
      "https://apit.dns3log.com/vw3/categorys",
      {},
      token
    );
    const sorts = ["全部", "最热", "畅销", "最新"].map((it, idx) => ({
      action: "/yami",
      method: "",
      text: it,
      form: { sort: idx + 1 },
      columns: [],
    }));
    return (
      <main className=" m-auto">
        <BaseForm {...searchProp} />
        <div className=" flex py-10">
          {sorts.map((prp, idx) => (
            <BaseForm key={idx} {...prp} />
          ))}
        </div>
        <BaseModal action="CATE" title="CATE">
          <div className=" grid grid-flow-row grid-cols-4">
            {categorys.map((it, idx) => (
              <BaseForm
                key={idx}
                action="/yami"
                method=""
                text={it.title}
                form={{ cid: it.sid }}
                columns={[]}
              />
            ))}
          </div>
        </BaseModal>
      </main>
    );
  }
  // 关键字
  if (q) {
    const {
      // actor,
      videos,
      next,
    }: { next: number; videos: Video[]; actor: Actor } = await ff(
      "https://apit.dns3log.com/vw3/search",
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
        <Avs videos={videos} />
        {next > 0 && <Footer {...{ to: next, q }} />}
        <div className=" fixed bottom-2 right-2">
          <BaseForm {...backProp} />
        </div>
      </main>
    );
  }
  // 大类
  if (cid) {
    const {
      // actor,
      videos,
      next,
    }: { next: number; videos: Video[]; actor: Actor } = await ff(
      `https://apit.dns3log.com/vw3/lite/category/${cid}/videos`,
      {
        video_type: "long",
        next: to,
      },
      token
    );
    // console.log(actor);

    return (
      <main className=" flex-1">
        <Avs videos={videos} />
        {next > 0 && <Footer {...{ to: next, cid }} />}
        <div className=" fixed bottom-2 right-2">
          <BaseForm {...backProp} />
        </div>
      </main>
    );
  }
  // 小类
  if (gid) {
    const {
      // actor,
      videos,
      next,
    }: { next: number; videos: Video[]; actor: Actor } = await ff(
      `https://apit.dns3log.com/vw3/genre/${gid}/videos`,
      {
        video_type: "long",
        next: to,
      },
      token
    );
    // console.log(actor);

    return (
      <main className=" flex-1">
        <Avs videos={videos} />
        {next > 0 && <Footer {...{ to: next, gid }} />}
        <div className=" fixed bottom-2 right-2">
          <BaseForm {...backProp} />
        </div>
      </main>
    );
  }
  // 演员
  if (sid) {
    const {
      // actor,
      videos,
      next,
    }: { next: number; videos: Video[]; actor: Actor } = await ff(
      `https://apit.dns3log.com/vw3/actor/${sid}/videos`,
      {
        actor_type: "long",
        next: to,
      },
      token
    );
    // console.log(actor);

    return (
      <main className=" flex-1">
        <Avs videos={videos} />
        {next > 0 && <Footer {...{ to: next, sid }} />}
        <div className=" fixed bottom-2 right-2">
          <BaseForm {...backProp} />
        </div>
      </main>
    );
  }
  // 演员索引
  if (sort) {
    const girls: { actors: Actor[]; next: number } = await fetch(
      "https://apit.dns3log.com/vw3/category/actors",
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
    return (
      <main className=" flex-1 p-2 overflow-hidden">
        {girls.actors.map((actor) => (
          <div key={actor.sid} className=" float-left m-2">
            <Link className=" text-sm" href={`/yami?sid=${actor.sid}`}>
              <Yamimage
                url={actor.cover64}
                name={actor.name}
                desc={`${actor.cup} ${actor.video_count}`}
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
  // 详情
  const res: resProps = await ff(
    `https://apit.dns3log.com/vw3/video/${id}`,
    {
      cdn: "tc",
    },
    token
  );
  const {
    carousel_videos,
    recommend_videos,
    video: { sources, actors = [], title, genres },
  } = res;
  // console.log(sources);
  return (
    <main className=" flex-1 p-4">
      <div>{title}</div>
      <div className=" my-2">
        {genres.map((it, idx) => (
          <Link
            key={idx}
            className=" mx-2 underline"
            href={`/yami?gid=${it.sid}`}
          >
            {it.name}
          </Link>
        ))}
      </div>
      {Object.keys({ ...sources })
        .filter((it) => !!sources[it])
        .map((it, idx) => (
          <BaseRadioPlayer key={idx} url={`${sources[it]}`} action={it} />
        ))}

      <h1 className=" text-2xl font-bold tracking-tighter leading-tight">
        recommend_videos
      </h1>
      <Avs videos={recommend_videos.concat(carousel_videos)} />
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
