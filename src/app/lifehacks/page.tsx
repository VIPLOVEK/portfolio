
import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, lifehacks, person } from "@/resources";
import { getPosts } from "@/utils/utils";
import { FilteredPosts } from "@/components/lifehacks/FilteredPosts";

export async function generateMetadata() {
  return Meta.generate({
    title: lifehacks.title,
    description: lifehacks.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(lifehacks.title)}`,
    path: lifehacks.path,
  });
}

export default function LifeHacks() {
  const allPosts = getPosts(["src", "app", "lifehacks", "posts"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={lifehacks.title}
        description={lifehacks.description}
        path={lifehacks.path}
        image={`/api/og/generate?title=${encodeURIComponent(lifehacks.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/lifehacks`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {lifehacks.title}
      </Heading>
      <FilteredPosts posts={allPosts} />
    </Column>
  );
}
