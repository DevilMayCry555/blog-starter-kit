"use client";

import { ListGroup } from "react-bootstrap";

export default function UserArts({ listData = [] }: any) {
  return (
    <ListGroup variant="flush" as="ul" numbered>
      {[].concat(listData).map((it) => {
        const { uid, title } = it;
        return (
          <ListGroup.Item
            as="a"
            key={uid}
            href={`/guess/${uid}`}
            className="mb-2"
          >
            {title}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
