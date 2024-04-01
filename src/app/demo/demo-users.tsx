import { Button, Table } from "react-bootstrap";
import DemoCreate from "./demo-create";

import { nfetch } from "@/lib/api";

export default async function Demo() {
  // const { fields, rows } = await getUsers();
  const { fields, rows }: { fields: any[]; rows: any[] } = await nfetch(
    "/user",
    { cache: "no-cache" }
  );
  const columns: any[] = fields.map((it) => it.name);
  const config = {
    fields: {
      username: "用户名",
    },
    action: "/api/user",
    method: "POST",
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((it, idx) => (
              <th key={idx}>{it}</th>
            ))}
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.uid}>
              {columns.map((it, idx) => (
                <td key={idx} style={{ verticalAlign: "middle" }}>
                  {row[it]}
                </td>
              ))}
              <td>
                <Button variant="danger">delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <DemoCreate {...config} />
    </>
  );
}
