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

// import { getuuid } from "@/lib/utils";

interface Column {
  field: string;
  label: string;
  type: string;
  required?: boolean;
  hidden?: boolean;
  options?: any[];
  init?: string;
}
interface Props {
  columns: Column[];
  action: string;
  method: string;
  text?: string;
}

export default function BaseForm({
  columns,
  action,
  method,
  text = "submit",
}: Props) {
  return (
    <form action={action} method="GET" encType="text/plain">
      <input type="text" name="method" defaultValue={method} hidden />
      {columns.map((it) => {
        const {
          field,
          label,
          type = "input",
          hidden = false,
          required = true,
          options = [],
          init,
        } = it;
        // const uuid = getuuid(field);
        return (
          <div style={hidden ? { display: "none" } : undefined} key={field}>
            {type === "input" && (
              <Input
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
                    {it.value}
                  </SelectItem>
                ))}
              </Select>
            )}
            {type === "checkbox" && (
              <Checkbox defaultSelected name={field}>
                {label}
              </Checkbox>
            )}
            {type === "date" && <DateInput label={label} name={field} />}
            {type === "time" && <TimeInput label={label} name={field} />}
            <Spacer y={4} />
          </div>
        );
      })}
      <Button type="submit">{text}</Button>
    </form>
  );
}
