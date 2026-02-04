import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
}: PostsProps) {
  let allLifeHacks = getPosts(["src", "app", "lifehacks", "posts"]);

  // Exclude by slug (exact match)
  if (exclude.length) {
    allLifeHacks = allLifeHacks.filter((post) => !exclude.includes(post.slug));
  }

  const sortedLifeHacks = allLifeHacks.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedLifeHacks = range
    ? sortedLifeHacks.slice(range[0] - 1, range.length === 2 ? range[1] : sortedLifeHacks.length)
    : sortedLifeHacks;

  return (
    <>
      {displayedLifeHacks.length > 0 && (
        <Grid columns={columns} s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
          {displayedLifeHacks.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} direction={direction} />
          ))}
        </Grid>
      )}
    </>
  );
}
