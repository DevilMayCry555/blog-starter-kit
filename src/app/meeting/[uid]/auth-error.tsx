import BaseForm from "@/app/_components/base-form";

async function AuthError({ uid }: any) {
  const joinProps = {
    action: `/meeting/${uid}`,
    method: "get",
    text: "芝麻开门",
    columns: [
      {
        field: "k",
        label: "口令",
        type: "input",
      },
    ],
  };

  return (
    <main className=" w-40 m-auto">
      <BaseForm {...joinProps} />
    </main>
  );
}

export default AuthError;
