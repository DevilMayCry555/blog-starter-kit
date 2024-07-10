"use client";

import BaseCard from "../_components/base-card";
import BaseForm from "../_components/base-form";
import BaseModal from "../_components/base-modal";
import BaseTab from "../_components/base-tab";
import { useMemo, useState } from "react";
import { Button, Chip } from "@nextui-org/react";

const deleteProps = (uid: string) => ({
  action: "/api/food",
  method: "delete",
  text: "delete",
  form: { uid },
  columns: [],
});
const updateProps = (info: any) => ({
  action: "/api/food",
  method: "update",
  text: "update",
  form: { uid: info.uid },
  columns: [
    {
      field: "calorie",
      label: "kcal",
      type: "number",
      init: +info.calorie,
    },
    {
      field: "intro",
      label: "intro",
      type: "textarea",
      init: info.intro,
    },
  ],
});
export default function Order({
  types,
  rows,
}: {
  types: string[];
  rows: any[];
}) {
  const [select, set] = useState<string[]>([]);
  const handle = (uid: string, reverse = false) => {
    if (reverse) {
      set(select.filter((it) => it !== uid));
    } else if (!select.includes(uid)) {
      set(select.concat(uid));
    }
  };
  const orderForm = useMemo(() => {
    if (select.length === 0) {
      return null;
    }
    const orderProps = {
      action: "/api/email",
      method: "order",
      text: "点餐",
      form: {
        content: select
          .map((it) => rows.find((r) => r.uid === it)?.name)
          .join(","),
      },
      columns: [
        {
          field: "remark",
          label: "备注",
          type: "textarea",
        },
      ],
    };
    return (
      <BaseModal action={select.length} title="">
        <div className=" min-h-24">
          <div className=" my-2">
            {select.map((it) => (
              <Chip key={it} onClose={() => handle(it, true)}>
                {rows.find((r) => r.uid === it)?.name}
              </Chip>
            ))}
          </div>
          <BaseForm {...orderProps} />
        </div>
      </BaseModal>
    );
  }, [select]);
  const group = types.map((name, type) => {
    return {
      title: name,
      content: rows
        .filter((it) => +it.type === type)
        .map((item, idx) => (
          <BaseCard
            title={
              <>
                <span className=" w-14">{item.uid}</span>
                <span className=" flex-1">{item.name}</span>
                <span>{item.calorie} kcal</span>
              </>
            }
            key={idx}
          >
            <div>{item.intro}</div>
            <div className=" flex justify-end">
              <Button color="danger" onClick={() => handle(item.uid)}>
                order
              </Button>
              <BaseModal action="update" title="" dismiss={false}>
                <BaseForm {...updateProps(item)} />
              </BaseModal>
              <BaseForm {...deleteProps(item.uid)} />
            </div>
          </BaseCard>
        )),
    };
  });
  return (
    <>
      <BaseTab group={group} vertical={true} defaultKey="0" />
      <div className=" fixed bottom-4 right-4">{orderForm}</div>
    </>
  );
}
