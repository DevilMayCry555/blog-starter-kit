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
} from "@nextui-org/react";

interface RowProps {
  actions: any[];
  [k: string]: any;
}
interface Props {
  fields: any[];
  rows: RowProps[];
}
export default function BaseTable({ fields, rows }: Props) {
  // 取消uid行的显示
  const columns: any[] = ["actions"]
    .concat(fields.map((it) => it.name))
    .filter((it) => it !== "draw");
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
                  <TableCell key={idx}>
                    {row.actions.map((it, idx) => {
                      const { text, action, method, params } = it;
                      const items = Object.entries({ ...params, method });
                      if (method === "router") {
                        return (
                          <Link key={idx} href={action}>
                            <Button>{text}</Button>
                          </Link>
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
                    })}
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
