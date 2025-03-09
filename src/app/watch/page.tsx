import { ff } from "@/lib/api";
import BaseRadioPlayer from "../_components/base-radio-player";
import BaseList from "../_components/base-list";

//
export default async function Watch({ searchParams }: any) {
  const { id } = searchParams;
  if (!id) {
    // const list = fields.map((it) => {
    //   return { label: `/watch?id=${it.code}`, value: it.name };
    // });
    return (
      <main className=" flex-1">
        {Object.entries({
          暮光之城,
          加菲猫,
          好剧,
          漫威,
          龙珠,
          黑袍纠察队,
          进击的巨人,
          鬼灭之刃,
          秦时明月,
          综艺,
          怀旧,
        }).map((it, idx) => {
          const [label, value] = it;
          const list = value.map((it) => {
            return { label: `/watch?id=${it.code}`, value: it.name };
          });
          return (
            <div key={idx}>
              <div className=" text-center">{label}</div>
              <BaseList list={list} />
            </div>
          );
        })}
      </main>
    );
  }
  const info = fields.find((it) => `${it.code}` === id);
  if (!info) {
    return 404;
  }
  const { token, type, code, name } = info;
  const res = await ff("https://v.aikanbot.com/api/getResN", {
    videoId: code,
    mtype: type,
    token,
  });
  // console.log(res.data);
  const list: { id: number; resData: string }[] = res.data.list;
  const group = list.map((it) => {
    const [{ url }] = JSON.parse(it.resData);
    return `${url}`.split("#").filter((it) => !!it);
  });
  return (
    <main className=" flex-1 p-4">
      <h1 className=" text-3xl font-bold tracking-tighter leading-tight">
        {name}
      </h1>
      {group.map((g, idx) => (
        <div key={idx}>
          <div>线路{idx + 1}</div>
          {g.map((v) => {
            const [lab, url] = `${v}`.split("$");
            return (
              <BaseRadioPlayer key={url} action={lab} url={url} rt={true} />
            );
          })}
        </div>
      ))}
    </main>
  );
}
//
const 加菲猫 = [
  {
    code: 387916,
    name: "加菲猫 2004",
    type: 1,
    token: "2c1fe5c78f7737223c9a71443c4dd24d",
  },
  {
    code: 411885,
    name: "加菲猫 2006",
    type: 1,
    token: "28c1965251a6fd7eee5868706e6aa951",
  },
  {
    code: 746742,
    name: "加菲猫的幸福生活 S1",
    type: 18,
    token: "3c8d8682c5918a4bd978026de6a3eefa",
  },
  {
    code: 746741,
    name: "加菲猫的幸福生活 S2",
    type: 18,
    token: "30fc0a7f06b29a19e125b861e4bf500a",
  },
  {
    code: 746743,
    name: "加菲猫的幸福生活 S3",
    type: 18,
    token: "249983ee58c172e36d9065320cdf5ffb",
  },
  {
    code: 746737,
    name: "加菲猫的幸福生活 S4",
    type: 18,
    token: "d0202ab4cf0e9b8edae05942b539c467",
  },
];
const 漫威 = [
  {
    code: 408503,
    name: "死侍 2016",
    type: 1,
    token: "d4f048c2191a010539e6a2c9596e72a1",
  },
  {
    code: 602137,
    name: "死侍 2018",
    type: 1,
    token: "9150a0bb61834a0675295197075ce0fe",
  },
];
const 好剧 = [
  {
    code: 421162,
    name: "甄嬛传",
    type: 2,
    token: "a49abcd6d66c6479aef6e98cdfdfdbc7",
  },
  {
    code: 587092,
    name: "知否知否",
    type: 2,
    token: "bc16f57d183f499a73dbae85c0354ccd",
  },
  {
    code: 381931,
    name: "请回答1988",
    type: 2,
    token: "3924fd46af8f266d182f89805910f65c",
  },

  {
    code: 388539,
    name: "亮剑",
    type: 2,
    token: "08b510abb6441d15419f0d4303fe34a9",
  },
  {
    code: 661929,
    name: "都挺好",
    type: 2,
    token: "bfb36ed29efb7fc426dfabea31980d92",
  },
];
const 龙珠 = [
  {
    code: 409751,
    name: "龙珠改",
    type: 18,
    token: "736749d0d15128840205d9facadf6295",
  },
  {
    code: 417285,
    name: "龙珠改 布欧篇",
    type: 18,
    token: "9c97d275f878c3d78f1ac96687bf9284",
  },
  {
    code: 428864,
    name: "龙珠GT",
    type: 18,
    token: "bc54e6c8ce311ee0cb2914d41fb80bab",
  },
];
const 黑袍纠察队 = [
  {
    code: 600544,
    name: "黑袍纠察队 S1",
    type: 2,
    token: "500c92e588e203dae70114e3734105cd",
  },
  {
    code: 606074,
    name: "黑袍纠察队 S2",
    type: 2,
    token: "18ada106d6a37626f31d34ce1aa775c0",
  },
  {
    code: 679088,
    name: "黑袍纠察队 S3",
    type: 2,
    token: "dde1eb7d22453ef08738b36241bd8ad3",
  },
  {
    code: 859225,
    name: "黑袍纠察队 S4",
    type: 2,
    token: "ce686031cf1c8887e85e3740e7a4d77a",
  },
];
const 进击的巨人 = [
  {
    code: 707380,
    name: "进击的巨人 S1 2013",
    type: 18,
    token: "8d1a3323fa72d9615e59ad7486bb54c9",
  },
  {
    code: 622131,
    name: "进击的巨人 S2 2017",
    type: 18,
    token: "45105335be2f0271acdf6c50272d7ff7",
  },
  {
    code: 659704,
    name: "进击的巨人 S3.1 2018",
    type: 18,
    token: "4f4aa795a13afe3b9ac439dfd131c83f",
  },
  {
    code: 657171,
    name: "进击的巨人 S3.2 2019",
    type: 18,
    token: "6a2948f4cca8dd16be307a4a0e287e3a",
  },
  {
    code: 604540,
    name: "进击的巨人 S4.1 2020",
    type: 18,
    token: "52b40f8cb85eb1ad527f8c9949c68070",
  },
  {
    code: 602571,
    name: "进击的巨人 S4.2 2022",
    type: 18,
    token: "c0ada8aca2b8c4d5c9e36009b1b1babe",
  },
];
const 鬼灭之刃 = [
  {
    code: 601425,
    name: "鬼灭之刃：无限列车篇",
    type: 18,
    token: "f8dcd522fdd6f6eeb1fe9a7f52915667",
  },
  {
    code: 601428,
    name: "鬼灭之刃：游郭篇",
    type: 18,
    token: "e4d03c33cc494ecea8aa71a2e49c3b2a",
  },
  {
    code: 792897,
    name: "鬼灭之刃：锻刀村篇",
    type: 18,
    token: "7761c2aee7260c416b569fc87998c2de",
  },
  {
    code: 854922,
    name: "鬼灭之刃：柱训练篇",
    type: 18,
    token: "6c119b0ec65543f04ef28b89592950f3",
  },
];
const 秦时明月 = [
  {
    code: 390471,
    name: "秦时明月：诸子百家 2010",
    type: 18,
    token: "aec8b674762c68c4024f3c9d033b2f41",
  },
  {
    code: 429707,
    name: "秦时明月：万里长城 2012",
    type: 18,
    token: "ccab15e8a2f2836109c8bedc4fb26d10",
  },
  {
    code: 381422,
    name: "秦时明月：君临天下 2014",
    type: 18,
    token: "94134b4bf976cfdd4a260f69b03179f1",
  },
];
const 综艺 = [
  {
    code: 661589,
    name: "明星大侦探 S3",
    type: 19,
    token: "d88c4f5204ad3aa9cf43641283ac8dd7",
  },
  {
    code: 591360,
    name: "明星大侦探 S4",
    type: 19,
    token: "14cf892ea66018125f719027f4aa9179",
  },
];
const 怀旧 = [
  {
    code: 602519,
    name: "火影忍者",
    type: 18,
    token: "cc8b1a2401bef2469e36d7d81ab50f7e",
  },
  {
    code: 396912,
    name: "数码宝贝",
    type: 18,
    token: "215467d0e762b4c86949048abac828a7",
  },
  {
    code: 431319,
    name: "变形金刚：领袖之证 S1",
    type: 18,
    token: "05faf98f205dd0756fb4a308440c4020",
  },
  {
    code: 422593,
    name: "变形金刚：领袖之证 S2",
    type: 18,
    token: "1ee1ffa2da508c24edf2caf8dec47094",
  },
];
const 暮光之城 = [
  {
    code: 421110,
    name: "新月 2009",
    type: 1,
    token: "2fffadb8f121a80555d90fcf3745edae",
  },
  {
    code: 386028,
    name: "月食 2010",
    type: 1,
    token: "e0b7c0479b307fc420cabf4b94eff768",
  },
  {
    code: 419122,
    name: "破晓上 2011",
    type: 1,
    token: "66b12c05ad2e381af725e1e0836af6ba",
  },
  {
    code: 416109,
    name: "破晓下 2012",
    type: 1,
    token: "41cc2eca40c460bf649691a9142fb088",
  },
];
const fields = Object.values({
  暮光之城,
  加菲猫,
  漫威,
  好剧,
  龙珠,
  黑袍纠察队,
  进击的巨人,
  鬼灭之刃,
  秦时明月,
  综艺,
  怀旧,
}).flat();
