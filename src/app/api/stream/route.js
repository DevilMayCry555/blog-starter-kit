import { NextResponse } from "next/server";

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

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const encoder = new TextEncoder();

async function* makeIterator() {
  yield encoder.encode("I_");
  await sleep(1000);
  yield encoder.encode("LOVE_");
  await sleep(1000);
  yield encoder.encode("YOU_❤");
}
export async function POST() {
  const iterator = makeIterator();
  const stream = iteratorToStream(iterator);

  return new NextResponse(stream, { status: 200 });
}
