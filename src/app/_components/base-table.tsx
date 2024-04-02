import { Button, Table } from "react-bootstrap";
interface Props {
  fields: any[];
  rows: any[];
  actions: any[];
}
export default function BaseTable({ fields, rows, actions = [] }: Props) {
  // 取消uid行的显示
  const columns: any[] = fields.map((it) => it.name).slice(1);
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {columns.map((it, idx) => (
            <th className="min-w-40" key={idx}>
              {it}
            </th>
          ))}
          <th className="min-w-40">actions</th>
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
              {actions.map((it, idx) => {
                const { text, action, params } = it;
                const items = Object.entries({ ...params(row) });
                return (
                  <form key={`${row.uid}-${idx}`} action={action} method="GET">
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
                    <Button type="submit" variant="link">
                      {text}
                    </Button>
                  </form>
                );
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
