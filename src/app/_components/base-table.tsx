"use client";

import Link from "next/link";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Snippet,
  Image,
} from "@nextui-org/react";
import BaseModal from "./base-modal";

interface RowProps {
  actions: any[];
  [k: string]: any;
}
interface Props {
  fields: any[];
  rows: RowProps[];
}

const getActions = (actions: any[]) => {
  return actions.map((it, idx) => {
    const { text, action, method, params } = it;
    const items = Object.entries({ ...params, method });
    if (method === "router") {
      return (
        <Link key={idx} href={action}>
          <Button>{text}</Button>
        </Link>
      );
    }
    if (method === "modal") {
      return (
        <BaseModal action={action} title={text}>
          {items.map((it) => {
            const [key, val] = it;
            return (
              <div key={key}>
                {key}：<Snippet>{`${val}`}</Snippet>
              </div>
            );
          })}
        </BaseModal>
      );
    }
    if (method === "image") {
      return (
        <BaseModal action={action} title={text}>
          <Image width={150} src={`${params.data}`} />
        </BaseModal>
      );
    }
    return (
      <form key={idx} action={action} method="GET">
        {items.map((it) => {
          const [key, val] = it;
          return (
            <input
              key={key}
              type="text"
              className="hidden"
              name={key}
              defaultValue={String(val)}
            />
          );
        })}
        <Button type="submit">{text}</Button>
      </form>
    );
  });
};

export default function BaseTable({ fields, rows }: Props) {
  // 取消uid行的显示
  const columns: any[] = ["actions"].concat(fields.map((it) => it.name));

  return (
    <Table aria-label="Example static collection table">
      <TableHeader columns={columns}>
        {columns.map((it, idx) => (
          <TableColumn key={idx}>{it}</TableColumn>
        ))}
      </TableHeader>
      <TableBody items={rows}>
        {rows.map((row) => (
          <TableRow key={row.uid}>
            {columns.map((it, idx) => {
              if (idx === 0) {
                return (
                  <TableCell key={idx} className=" flex justify-around">
                    {getActions(row.actions)}
                  </TableCell>
                );
              }
              return <TableCell key={idx}>{row[it]}</TableCell>;
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
