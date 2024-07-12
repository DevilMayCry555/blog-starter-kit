import { ff } from "@/lib/api";
import BaseRadioPlayer from "../_components/base-radio-player";
import BaseList from "../_components/base-list";
import { Link, User as MyUser } from "@nextui-org/react";
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
interface Actor {
  sid: number;
  birthday: number;
  birth: number;
  cover64: string;
  cup: string;
  name: string;
  video_count: number;
}
export default async function Yami({ searchParams }: any) {
  const { id = "", sid = "" } = searchParams;
  const { token } = await ff("https://apiw2.eaeja.com/vw3/visitor");
  const girls: { actors: Actor[]; next: number } = await fetch(
    "https://apiw2.eaeja.com/vw3/category/actors",
    {
      method: "POST",
      body: JSON.stringify({
        actor_type: "long",
        age: "ALL",
        category: 1,
        cup: "ALL",
      }),
      headers: {
        "Access-Token": `Bearer ${token}`,
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  ).then((res) => res.json());
  // console.log(girls.actors[0]);
  if (sid) {
    const { actor, videos }: { next: number; videos: Video[]; actor: Actor } =
      await ff(
        `https://apiw2.eaeja.com/vw3/actor/${sid}/videos`,
        {
          actor_type: "long",
        },
        token
      );
    console.log(actor);
    // console.log(img);
    return (
      <div>
        <MyUser
          name={actor.name}
          description={`${new Date(
            Date.now() - actor.birthday * 1000
          ).toLocaleDateString()} ${actor.cup} ${actor.video_count}`}
          avatarProps={{
            src: actor.cover64,
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
    return (
      <main className=" flex-1">
        <div className=" flex flex-wrap">
          {girls.actors.map((actor) => (
            <div className=" w-1/2">
              <MyUser
                key={actor.sid}
                name={<Link href={`/yami?sid=${actor.sid}`}>{actor.name}</Link>}
                description={`${new Date(
                  actor.birth * 1000
                ).toLocaleDateString()} ${actor.cup} ${actor.video_count}`}
              />
            </div>
          ))}
        </div>
      </main>
    );
  }

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
