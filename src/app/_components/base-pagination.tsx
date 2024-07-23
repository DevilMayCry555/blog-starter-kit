"use client";

import { Pagination, Spacer } from "@nextui-org/react";
import { useRouter } from "next/navigation";
interface Props {
  current: string;
  pageSize: string;
  total: number;
  path: string;
}
export default function BasePagination({
  current,
  pageSize,
  total,
  path,
}: Props) {
  const router = useRouter();
  const onPageChange = (num: number) => {
    router.push(`${path}?current=${num}`);
  };
  if (+total <= +pageSize) {
    return null;
  }
  return (
    <div>
      <Spacer y={4} />
      <Pagination
        total={Math.ceil(+total / +pageSize)}
        initialPage={+current}
        onChange={onPageChange}
      />
      <Spacer y={4} />
    </div>
  );
}
