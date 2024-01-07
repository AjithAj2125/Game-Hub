import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../Services/image-url";
import GameCardSkeleton from "./GameCardSkeleton";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenre();
  const c = 20;
  if (isLoading)
    return [...new Array(c)].map((_, index) => (
      <GenreListSkeleton key={index} />
    ));

  return (
    <List>
      {data.map((g) => (
        <ListItem paddingY="5px" key={g.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            ></Image>
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
