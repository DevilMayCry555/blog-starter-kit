import Link from "next/link";
import { Button, Table } from "react-bootstrap";
interface Props {
  fields: any[];
  rows: any[];
  actions: (...args: any[]) => any[];
}
export default function BaseTable({ fields, rows, actions = () => [] }: Props) {
  // 取消uid行的显示
  const columns: any[] = fields.map((it) => it.name);
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>actions</th>
          {columns.map((it, idx) => (
            <th className="min-w-40" key={idx}>
              {it}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.uid}>
            {/* actions */}
            <td>
              {actions(row).map((it, idx) => {
                const { text, action, method, params } = it;
                const items = Object.entries({ ...params, method });
                if (method === "router") {
                  return (
                    <Link key={idx} href={action}>
                      {/* @ts-ignore */}
                      <Button variant="link">{text}</Button>
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
                    {/* @ts-ignore */}
                    <Button type="submit" variant="link">
                      {text}
                    </Button>
                  </form>
                );
              })}
            </td>
            {columns.map((it, idx) => (
              <td key={idx} style={{ verticalAlign: "middle" }}>
                {row[it]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
