"use client";

import { BASE_URL } from "@/lib/constants";
import { qstr } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Send = ({ formData }: { formData: { [k: string]: any } }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [words, set_words] = useState("");
  const handleClick = () => {
    const url = qstr(BASE_URL + "/api/meeting", {
      ...formData,
      content: words,
    });
    setLoading(true);
    fetch(url, {
      method: "GET",
      cache: "no-store",
    }).finally(() => {
      set_words("");
      setLoading(false);
      router.refresh();
    });
  };
  return (
    <form
      action="/api/meeting"
      method="GET"
      encType="text/plain"
      onSubmit={(e) => {
        handleClick();
        e.preventDefault();
      }}
    >
      <div className="input-box">
        <input
          type="text"
          name="content"
          required
          placeholder="不超过20字"
          value={words}
          onChange={(e) => set_words(e.target.value)}
        />
        {loading ? (
          <Button isLoading></Button>
        ) : (
          <button type="submit">发送</button>
        )}
      </div>
    </form>
  );
};

export default Send;
