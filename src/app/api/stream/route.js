import { NextResponse } from "next/server";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "@/lib/constants";
import { ChatGPTAPI } from "chatgpt";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  baseURL: "https://api.openai-proxy.com/v1",
});
const api = new ChatGPTAPI({
  apiKey: OPENAI_API_KEY,
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
  // const response = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo",
  //   stream: true,
  //   messages,
  // });
  const response = await api.sendMessage().chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  return new NextResponse(iteratorToStream(makeIterator(response)));
}
