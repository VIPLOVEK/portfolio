import { Column, Row, Heading, Text, Button } from "@once-ui-system/core";
import { person, social } from "@/resources";

export function ContactCTA() {
  return (
    <Column
      fillWidth
      horizontal="center"
      align="center"
      paddingY="xl"
      paddingX="l"
      gap="m"
      background="neutral-alpha-weak"
      radius="xl"
    >
      <Heading variant="heading-strong-l" align="center">
        Let&apos;s connect
      </Heading>
      <Text
        variant="body-default-m"
        onBackground="neutral-weak"
        align="center"
        wrap="balance"
      >
        Have a question, opportunity, or just want to say hello? I&apos;d love to hear from you.
      </Text>
      <Row gap="12" paddingTop="8">
        <Button
          href={`mailto:${person.email}`}
          prefixIcon="email"
          label="Get in touch"
          size="m"
          variant="primary"
        />
        {social.find((s) => s.name === "LinkedIn")?.link && (
          <Button
            href={social.find((s) => s.name === "LinkedIn")!.link}
            prefixIcon="linkedin"
            label="LinkedIn"
            size="m"
            variant="secondary"
          />
        )}
      </Row>
    </Column>
  );
}
