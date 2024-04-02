import BaseForm from "../_components/base-form";
import BaseTable from "../_components/base-table";
import BaseModal from "../_components/base-modal";
import { sql } from "@vercel/postgres";
export default async function Demo() {
  const { fields, rows } = await sql`SELECT * FROM users;`;
  const formProps = {
    config: {
      action: "/api/user",
      method: "POST",
    },
    columns: [
      {
        field: "username",
        label: "用户名",
        type: "input",
      },
    ],
  };
  const actions = [
    {
      text: "删除",
      action: "/api/user",
      params: (row: any) => {
        return {
          method: "delete",
          uid: row.uid,
        };
      },
    },
  ];
  return (
    <>
      <BaseModal action="new" title="new user">
        <BaseForm {...formProps} />
      </BaseModal>
      <BaseTable fields={fields} rows={rows} actions={actions} />
    </>
  );
}
