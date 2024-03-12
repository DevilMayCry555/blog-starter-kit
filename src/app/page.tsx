import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import { PWD } from "@/lib/constants";
import Login from "./_components/login";

export default function Index({ searchParams }: any) {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);
  // access
  const { key } = searchParams ?? {};
  if (btoa(PWD) !== key) {
    return <Login />;
  }
  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          access={key}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} access={key} />}
      </Container>
    </main>
  );
}
