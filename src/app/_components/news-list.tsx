"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import DateFormatter from "./date-formatter";
import BaseRadioPlayer from "./base-radio-player";
import BaseSwiper from "./base-swiper";
import BaseModal from "./base-modal";

const imagePath = "https://image.gcores.com/";

interface fileMap {
  type: string; // IMAGE
  data: any;
}
interface attr {
  title: string;
  content: string;
  desc: string;
  "published-at": string;
  "owner-type": string;
}
interface article {
  id: string;
  type: string;
  attributes: attr;
}
const getImages = (obj: { [k: string]: fileMap }) =>
  Object.values({ ...obj })
    .filter((value) => value.type === "IMAGE")
    .map((value) => `${imagePath}${value.data.path}`);

const getContent = (parts: any[]) =>
  parts.filter((it) => it.type === "unstyled").map((it) => it.text);

const transData = (news: article[]) =>
  news.map((it) => {
    const { content, title, desc, ...rest } = it.attributes;
    const newdata = {
      id: it.id,
      type: it.type,
      title,
      desc,
      time: rest["published-at"],
      owner: rest["owner-type"],
      blocks: [],
      imgs: [],
    };
    try {
      const { blocks, entityMap } = JSON.parse(content);
      return {
        ...newdata,
        blocks: getContent(blocks),
        imgs: getImages(entityMap),
      };
    } catch (e) {
      return { ...newdata, error: JSON.stringify(e) };
    }
  });

export default function NewsList({ data, paths = [] }: any) {
  // type radios articles
  const news = transData(data);
  // console.log(paths);
  return (
    <Accordion>
      {news.map((it, idx) => (
        <AccordionItem
          key={it.id}
          aria-label={it.title}
          title={it.title}
          subtitle={it.desc}
        >
          <div className=" flex justify-between">
            {paths[idx] && <BaseRadioPlayer url={paths[idx]} />}
            {it.imgs.length > 0 && <BaseSwiper urls={it.imgs} />}
            {it.blocks.length > 0 && (
              <BaseModal action="..." title="">
                {it.blocks.map((it, idx) => (
                  <div key={idx}>{it}</div>
                ))}
              </BaseModal>
            )}
          </div>
          <DateFormatter dateString={it.time} />
        </AccordionItem>
      ))}
    </Accordion>
  );
}
