import Login from "../_components/login";

export default function Auth({ searchParams }: any) {
  const { from } = searchParams ?? {};
  return <Login originURL={from} />;
}
