import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

function GenreSkeleton() {
  return (
    <Card height="auto" width="auto">
      <HStack paddingX={2}>
        <Skeleton height="30px" width="30px" />
        <CardBody padding={3}>
          <SkeletonText height="20px" overflow="hidden" />
        </CardBody>
      </HStack>
    </Card>
  );
}

export default GenreSkeleton;
