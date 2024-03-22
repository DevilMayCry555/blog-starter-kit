import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import { CMS_NAME, PWD } from "../../../lib/constants";
import markdownToHtml from "../../../lib/markdownToHtml";
// import Alert from "../../_components/alert";
import Container from "../../_components/container";
import Header from "../../_components/header";
import { PostBody } from "../../_components/post-body";
import { PostHeader } from "../../_components/post-header";
import Login from "@/app/_components/login";

import "./photo-wall-style.css";
import "./time-line-style.css";

export default async function Post({ params, searchParams }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }
  // access
  const { key } = searchParams ?? {};
  if (btoa(PWD) !== key) {
    return <Login originURL={`/posts/${params.slug}`} />;
  }
  const content = await markdownToHtml(post.content || "");
  const res = await fetch("https://www.tydwin.top/demo", { cache: "no-cache" });

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}
      <Container>
        <Header />
        {JSON.stringify(res)}
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
  searchParams: any;
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
