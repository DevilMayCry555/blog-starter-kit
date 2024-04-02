"use client";

import { getuuid } from "@/lib/utils";
import { Button } from "react-bootstrap";

interface Column {
  field: string;
  label: string;
  type: string;
}
interface Props {
  columns: Column[];
  config?: { [k: string]: any };
}

export default function BaseForm({ columns, config }: Props) {
  return (
    <form action="/404" method="POST" {...config} encType="text/plain">
      {columns.map((it) => {
        const { field, label, type = "input" } = it;
        const uuid = getuuid(field);
        return (
          <div key={field}>
            <label
              htmlFor={uuid}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {label}:
            </label>
            {type === "input" && (
              <input
                id={uuid}
                name={field}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            )}
          </div>
        );
      })}
      <Button type="submit" className="mt-6">
        submit
      </Button>
    </form>
  );
}
