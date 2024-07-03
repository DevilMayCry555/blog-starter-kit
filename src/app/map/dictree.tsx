"use client";

import {
  Accordion,
  AccordionItem,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";

interface dict {
  name: string;
  adcode: string;
  districtList?: dict[];
}
export default function Dictree({ treeData }: any) {
  const tree: dict[] = treeData ?? [];
  return tree.some((it) => !!it.districtList) ? (
    <Accordion>
      {tree.map((it, idx) => (
        <AccordionItem
          key={idx}
          aria-label={it.name}
          title={it.name}
          className=" bg-transparent"
        >
          <Dictree treeData={it.districtList} />
        </AccordionItem>
      ))}
    </Accordion>
  ) : (
    <Listbox aria-label="Pages">
      {tree.map((it) => {
        return (
          <ListboxItem key={it.adcode} textValue={it.adcode}>
            <div id={`tyd-${it.adcode}`}>{it.name}</div>
          </ListboxItem>
        );
      })}
    </Listbox>
  );
}
