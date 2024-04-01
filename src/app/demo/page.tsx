import { Button, Table } from "react-bootstrap";
import Container from "../_components/container";
import "bootstrap/dist/css/bootstrap.min.css";

import { sql } from "@vercel/postgres";
const getUsers = () => sql`SELECT * FROM users;`;

export default async function Demo() {
  const { fields, rows } = await getUsers();
  const columns = fields.map((it) => it.name);
  return (
    <main>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              {columns.map((it) => (
                <th>{it}</th>
              ))}
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                {columns.map((it) => (
                  <td style={{ verticalAlign: "middle" }}>{row[it]}</td>
                ))}
                <td>
                  <Button variant="info">detail</Button>{" "}
                  <Button variant="danger">delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </main>
  );
}
