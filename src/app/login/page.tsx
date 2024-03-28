import Loginer from "@/app/_components/login";
import { baseURL } from "@/lib/api";

export default function Login() {
  return (
    <>
      {baseURL}
      <Loginer />
    </>
  );
}
