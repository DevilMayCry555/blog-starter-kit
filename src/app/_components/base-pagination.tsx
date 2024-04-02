"use client";

import { Pagination } from "react-bootstrap";
import { useRouter } from "next/navigation";
interface Props {
  current: string;
  pageSize: string;
  total: string;
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
  const items = [];
  for (let number = 1; number <= Math.ceil(+total / +pageSize); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === +current}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
}
