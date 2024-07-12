import { ff } from "@/lib/api";
import BaseRadioPlayer from "../_components/base-radio-player";
import BaseForm from "../_components/base-form";
import BaseList from "../_components/base-list";
import { User as MyUser } from "@nextui-org/react";
//
interface Video {
  code: string;
  cover64: string;
  title: string;
  [k: string]: any;
}
interface resProps {
  carousel_videos: Video[];
  recommend_videos: Video[];
  video: Video;
}
interface actor {
  actor: {
    sid: number;
    birthday: number;
    cover64: string;
    cup: string;
    name: string;
    video_count: number;
  };
  genres: any[];
  next: number;
  videos: Video[];
}
export default async function Watch({ searchParams }: any) {
  const { id = "", sid = "" } = searchParams;
  const { token } = await ff("https://apiw2.eaeja.com/vw3/visitor");
  if (sid) {
    const { actor, videos }: actor = await ff(
      `https://apiw2.eaeja.com/vw3/actor/${sid}/videos`,
      {
        actor_type: "long",
      },
      token
    );
    console.log(actor);
    const img = await fetch(actor.cover64).then((res) => res.text());
    // console.log(img);
    return (
      <div>
        <MyUser
          name={actor.name}
          description={`${new Date(
            Date.now() - actor.birthday * 1000
          ).toLocaleDateString()} ${actor.cup} ${actor.video_count}`}
          avatarProps={{
            src: `data:image/jpg;base64,${img}`,
            isBordered: true,
            imgProps: {
              style: {
                backgroundColor: "#fff",
              },
            },
          }}
        />
        <BaseList
          list={videos.map((it) => ({
            label: `/yami?id=${it.code}`,
            desc: it.title,
            value: it.code,
          }))}
        />
      </div>
    );
  }
  if (!id) {
    const codeProps = {
      action: "/yami",
      method: "",
      text: "GO",
      columns: [
        {
          field: "id",
          label: "find",
          type: "input",
          init: "270JGAHO-266",
          required: false,
        },
        {
          field: "sid",
          label: "actor",
          type: "input",
          init: "28560",
          required: false,
        },
      ],
    };
    return (
      <main className=" m-auto">
        <BaseForm {...codeProps} />
      </main>
    );
  }
  // https://dmfxh.gkgdgvse.com/result_actor/28560/%E7%BE%8E%E5%9C%92%E5%92%8C%E8%8A%B1?actor_type=long&actor_page_type=0

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
    video: { sources },
  } = res;
  // console.log(recommend_videos);
  return (
    <main className=" flex-1 p-4">
      <a href="/yami">back</a>
      <h1 className=" text-3xl font-bold tracking-tighter leading-tight">
        {id}
      </h1>
      {Object.keys({ ...sources })
        .filter((it) => !!sources[it])
        .map((it, idx) => (
          <BaseRadioPlayer key={idx} url={`${sources[it]}`} />
        ))}
      <h1 className=" text-3xl font-bold tracking-tighter leading-tight">
        recommend_videos
      </h1>
      <BaseList
        list={recommend_videos.map((it) => ({
          label: `/yami?id=${it.code}`,
          desc: it.title,
          value: it.code,
        }))}
      />
      <h1 className=" text-3xl font-bold tracking-tighter leading-tight">
        carousel_videos
      </h1>
      <BaseList
        list={carousel_videos.map((it) => ({
          label: `/yami?id=${it.code}`,
          desc: it.title,
          value: it.code,
        }))}
      />
    </main>
  );
}
