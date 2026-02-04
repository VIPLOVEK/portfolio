import { Row, Column, Text, SmartLink } from "@once-ui-system/core";

interface PostNav {
  slug: string;
  title: string;
}

interface PostNavigationProps {
  previous: PostNav | null;
  next: PostNav | null;
  basePath: string;
}

export function PostNavigation({ previous, next, basePath }: PostNavigationProps) {
  if (!previous && !next) return null;

  return (
    <Row fillWidth gap="16" marginTop="24" paddingX="l">
      <Column flex={1}>
        {previous && (
          <SmartLink href={`${basePath}/${previous.slug}`}>
            <Column gap="4">
              <Text variant="label-default-xs" onBackground="neutral-weak">
                Previous
              </Text>
              <Text variant="label-strong-s">
                {previous.title}
              </Text>
            </Column>
          </SmartLink>
        )}
      </Column>
      <Column flex={1} horizontal="end" align="end">
        {next && (
          <SmartLink href={`${basePath}/${next.slug}`}>
            <Column gap="4" horizontal="end" align="end">
              <Text variant="label-default-xs" onBackground="neutral-weak">
                Next
              </Text>
              <Text variant="label-strong-s">
                {next.title}
              </Text>
            </Column>
          </SmartLink>
        )}
      </Column>
    </Row>
  );
}
