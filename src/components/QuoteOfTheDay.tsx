"use client";

import { Column, Text } from "@once-ui-system/core";
import { getQuoteOfTheDay } from "@/resources/quotes";

export const QuoteOfTheDay = () => {
  const quote = getQuoteOfTheDay();

  return (
    <Column
      fillWidth
      paddingY="24"
      paddingX="20"
      radius="l"
      border="neutral-medium"
      background="surface"
      gap="16"
      align="center"
    >
      <Text
        variant="display-strong-xs"
        onBackground="brand-strong"
        align="center"
      >
        🛡️
      </Text>
      <Column gap="12" align="center" maxWidth="l">
        <Text
          variant="body-default-l"
          onBackground="neutral-strong"
          align="center"
          style={{ fontStyle: "italic", lineHeight: "1.6" }}
        >
          "{quote.text}"
        </Text>
        <Text
          variant="label-default-m"
          onBackground="neutral-weak"
          align="center"
        >
          — {quote.author}
        </Text>
      </Column>
      <Text
        variant="label-default-xs"
        onBackground="brand-medium"
        align="center"
      >
        💭 Quote of the Day
      </Text>
    </Column>
  );
};
