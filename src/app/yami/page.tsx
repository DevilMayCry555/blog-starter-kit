import { ff } from "@/lib/api";
import BaseRadioPlayer from "../_components/base-radio-player";
import BaseForm from "../_components/base-form";
import BaseList from "../_components/base-list";
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
export default async function Watch({ searchParams }: any) {
  const { id = "" } = searchParams;

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
        },
      ],
    };
    return (
      <main className=" m-auto">
        <BaseForm {...codeProps} />
      </main>
    );
  }
  const { token } = await ff("https://apiw2.eaeja.com/vw3/visitor");
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
  return (
    <main className=" flex-1 p-4">
      <a href="/yami">back</a>
      <h1 className=" text-3xl font-bold tracking-tighter leading-tight">
        {id}
      </h1>
      {Object.keys({ ...sources })
        .filter((it) => !!sources[it])
        .map((it) => (
          <BaseRadioPlayer url={`${sources[it]}`} />
        ))}
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
    </main>
  );
}
