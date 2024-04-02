import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";
import { cookies } from "next/headers";

export function Intro() {
  const access = cookies().get("auth-token");
  const isAdmin = access?.value === "admin";
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 hidden">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}.
      </h4>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        ❤ ~ Love Story ~ ❤
      </h4>
      {isAdmin && (
        <Link href="/demo">
          <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            控制台
          </button>
        </Link>
      )}
    </section>
  );
}
