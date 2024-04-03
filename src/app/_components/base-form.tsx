"use client";

import { getuuid } from "@/lib/utils";
import { Button, Form } from "react-bootstrap";

interface Column {
  field: string;
  label: string;
  type: string;
  required?: boolean;
}
interface Props {
  columns: Column[];
  action: string;
  method: string;
}

export default function BaseForm({ columns, action, method }: Props) {
  return (
    // <form action={action} method="GET" encType="text/plain">
    //   <input className="hidden" name="method" required defaultValue={method} />
    //   {/* 表单项 */}
    //   {columns.map((it) => {
    //     const { field, label, type = "input" } = it;
    //     const uuid = getuuid(field);
    //     return (
    //       <div key={field} className="mb-4">
    //         <label
    //           htmlFor={uuid}
    //           className="block text-sm font-medium leading-6 text-gray-900"
    //         >
    //           {label}：
    //         </label>
    //         {type === "input" && (
    //           <input
    //             id={uuid}
    //             name={field}
    //             required
    //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //           />
    //         )}
    //         {type === "checkbox" && (
    //           <input
    //             id={uuid}
    //             name={field}
    //             type="checkbox"
    //             className="h-8 w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //           />
    //         )}
    //       </div>
    //     );
    //   })}
    //   <Button type="submit">submit</Button>
    // </form>
    <Form action={action} method="GET" encType="text/plain">
      <Form.Group className="hidden">
        <Form.Label>method</Form.Label>
        <Form.Control name="method" defaultValue={method} />
      </Form.Group>
      {columns.map((it) => {
        const { field, label, type = "input", required = true } = it;
        const uuid = getuuid(field);
        return (
          <Form.Group key={field} className="mb-3">
            <Form.Label htmlFor={uuid}>{label}</Form.Label>
            {type === "input" && (
              <Form.Control name={field} required={required} id={uuid} />
            )}
            {type === "textarea" && (
              <Form.Control
                as="textarea"
                required={required}
                name={field}
                rows={3}
                id={uuid}
              />
            )}
            {type === "checkbox" && (
              <Form.Check type={type} id={uuid} name={field} />
            )}
          </Form.Group>
        );
      })}
      <Button variant="outline-primary" type="submit">
        submit
      </Button>
    </Form>
  );
}
