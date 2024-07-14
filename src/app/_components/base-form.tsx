"use client";

import {
  Button,
  Input,
  Textarea,
  Checkbox,
  SelectItem,
  Select,
  DateInput,
  TimeInput,
  Spacer,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { parseDate } from "@internationalized/date";
// import { getuuid } from "@/lib/utils";

interface Column {
  field: string;
  label: string;
  type: string;
  required?: boolean;
  options?: any[];
  init?: string;
}
interface Props {
  columns: Column[];
  action: string;
  method: string;
  text?: string;
  form?: { [k: string]: any };
  size?: "md" | "sm" | "lg" | undefined;
}

export default function BaseForm({
  columns,
  action,
  method,
  text = "submit",
  form,
  size = "md",
}: Props) {
  const [loading, set] = useState(false);
  useEffect(() => {
    set(false);
  }, []);
  return (
    <form
      action={action}
      method="GET"
      encType="text/plain"
      onSubmit={() => set(true)}
    >
      {Object.entries({ ...form, method }).map(([key, val], idx) =>
        val ? (
          <input type="text" key={idx} name={key} defaultValue={val} hidden />
        ) : null
      )}

      {columns.map((it) => {
        const {
          field,
          label,
          type = "input",
          required = true,
          options = [],
          init,
        } = it;
        // const uuid = getuuid(field);
        return (
          <div key={field}>
            {type === "input" && (
              <Input
                label={label}
                name={field}
                required={required}
                defaultValue={init}
              />
            )}
            {type === "number" && (
              <Input
                type="number"
                label={label}
                name={field}
                required={required}
                defaultValue={init}
              />
            )}
            {type === "email" && (
              <Input
                type="email"
                label={label}
                name={field}
                required={required}
                defaultValue={init}
              />
            )}
            {type === "textarea" && (
              <Textarea
                label={label}
                name={field}
                required={required}
                defaultValue={init}
              />
            )}
            {type === "select" && (
              <Select label={label} name={field} required={required}>
                {options.map((it) => (
                  <SelectItem key={it.value} value={it.value}>
                    {it.label ?? it.value}
                  </SelectItem>
                ))}
              </Select>
            )}
            {type === "checkbox" && <Checkbox name={field}>{label}</Checkbox>}
            {type === "date" && (
              <DateInput
                label={label}
                name={field}
                defaultValue={parseDate(init as any)}
              />
            )}
            {type === "time" && (
              <TimeInput
                label={label}
                name={field}
                defaultValue={init as any}
              />
            )}
            <Spacer y={4} />
          </div>
        );
      })}
      <Button type="submit" size={size} isLoading={loading}>
        {text}
      </Button>
    </form>
  );
}
