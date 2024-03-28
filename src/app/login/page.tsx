import Loginer from "@/app/_components/login";
import { headers } from "next/headers";

export default function Login() {
  return (
    <>
      {headers().get("host")}
      {headers().get("referer")}
      <Loginer />
    </>
  );
}
