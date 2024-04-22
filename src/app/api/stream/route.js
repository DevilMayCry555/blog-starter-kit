import { NextResponse } from "next/server";
import { OPENAI_API_KEY_HIGH } from "@/lib/constants";

import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY_HIGH,
  // baseURL: "https://api.openai-proxy.com/v1",
  baseURL: "https://hk.xty.app/v1",
});
const encoder = new TextEncoder();

async function* makeIterator(response) {
  for await (const chunk of response) {
    const delta = chunk.choices[0].delta.content;

    yield encoder.encode(delta);
  }
}

function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

export async function POST(req) {
  const { messages } = await req.json();
  console.log(messages);
  const response = await openai.chat.completions
    .create({
      model: "gpt-4",
      stream: true,
      messages,
    })
    .catch(async (err) => {
      if (err instanceof OpenAI.APIError) {
        console.log(err.status); // 400
        console.log(err.name); // BadRequestError
        console.log(err.headers); // {server: 'nginx', ...}
      } else {
        throw err;
      }
    });
  console.log(response);

  return new NextResponse(iteratorToStream(makeIterator(response)), {
    status: 200,
  });
}
