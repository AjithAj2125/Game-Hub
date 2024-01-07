import {
  HStack,
  List,
  ListItem,
  Skeleton,
  Box,
  SkeletonText,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/image-url";

const GenreListSkeleton = () => {
  return (
    <Skeleton margin="10px">
      <HStack>
        <Skeleton margin="5px"></Skeleton>
        <SkeletonText></SkeletonText>
      </HStack>
    </Skeleton>
  );
};

export default GenreListSkeleton;
