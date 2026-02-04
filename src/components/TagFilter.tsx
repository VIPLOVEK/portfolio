"use client";

import { Row, Button } from "@once-ui-system/core";

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export function TagFilter({ tags, selectedTag, onTagSelect }: TagFilterProps) {
  return (
    <Row gap="8" paddingX="24" wrap>
      <Button
        variant={selectedTag === null ? "primary" : "secondary"}
        size="s"
        onClick={() => onTagSelect(null)}
      >
        All
      </Button>
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTag === tag ? "primary" : "secondary"}
          size="s"
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </Button>
      ))}
    </Row>
  );
}
