"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

export function Reload() {
  const router = useRouter();
  return (
    <Button
      variant="outline-success"
      onClick={() => router.refresh()}
    >{`<(￣︶￣)↗[Reload!]`}</Button>
  );
}
