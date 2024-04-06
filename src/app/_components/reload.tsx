"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Reload() {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
    console.log("refresh");
  });
  return <div className="hidden"></div>;
}
