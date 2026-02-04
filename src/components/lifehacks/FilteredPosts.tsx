"use client";

import { useState } from "react";
import { Column, Grid } from "@once-ui-system/core";
import { TagFilter } from "@/components/TagFilter";
import Post from "./Post";

interface PostData {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    images: string[];
    tag?: string;
    team: { name: string; role: string; avatar: string; linkedIn: string }[];
    link?: string;
  };
  content: string;
}

interface FilteredPostsProps {
  posts: PostData[];
}

export function FilteredPosts({ posts }: FilteredPostsProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = Array.from(
    new Set(posts.map((p) => p.metadata.tag).filter(Boolean) as string[])
  ).sort();

  const filtered = selectedTag
    ? posts.filter((p) => p.metadata.tag === selectedTag)
    : posts;

  return (
    <Column fillWidth gap="24">
      {tags.length > 1 && (
        <TagFilter
          tags={tags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
        />
      )}
      {filtered.length > 0 ? (
        <Grid columns="2" s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
          {filtered.map((post) => (
            <Post key={post.slug} post={post} thumbnail direction="column" />
          ))}
        </Grid>
      ) : (
        <Column paddingX="24" paddingY="40">
          No posts found for this tag.
        </Column>
      )}
    </Column>
  );
}
