"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";

const Send = ({ formData }: { formData: { [k: string]: any } }) => {
  const [loading, setLoading] = useState(false);
  return (
    <form
      action="/api/meeting"
      method="GET"
      encType="text/plain"
      onSubmit={() => setLoading(true)}
    >
      {Object.entries({ ...formData }).map((it) => {
        const [key, val] = it;
        return (
          <input key={key} type="text" name={key} defaultValue={val} hidden />
        );
      })}
      <div className="input-box">
        <input type="text" name="content" required placeholder="不超过20字" />
        <Button type="submit" isLoading={loading}>
          发送
        </Button>
      </div>
    </form>
  );
};

export default Send;
