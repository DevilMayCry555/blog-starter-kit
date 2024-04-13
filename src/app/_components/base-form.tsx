"use client";

// import { getuuid } from "@/lib/utils";
import { Button, Form } from "react-bootstrap";

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
    <Form action={action} method="GET" encType="text/plain">
      <Form.Group className="hidden">
        <Form.Label>method</Form.Label>
        <Form.Control name="method" defaultValue={method} />
      </Form.Group>
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
          <Form.Group hidden={hidden} key={field} className="mb-3">
            <Form.Label className=" inline-block">{label}</Form.Label>
            {type === "input" && (
              <Form.Control
                name={field}
                required={required}
                defaultValue={init}
              />
            )}
            {type === "textarea" && (
              <Form.Control as="textarea" name={field} rows={3} />
            )}
            {type === "checkbox" && (
              <Form.Check
                className="inline-block mx-2"
                type="checkbox"
                name={field}
              />
            )}
            {type === "select" && (
              <Form.Select required={required}>
                {options.map((it) => (
                  <option key={it.value} value={it.value}>
                    {it.value}
                  </option>
                ))}
              </Form.Select>
            )}
            {["date", "time"].includes(type) && (
              <Form.Control type={type} name={field} required={required} />
            )}
          </Form.Group>
        );
      })}
      <Button variant="outline-primary" type="submit">
        {text}
      </Button>
    </Form>
  );
}
