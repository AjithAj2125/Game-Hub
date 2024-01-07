import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../Services/image-url";
import GameCardSkeleton from "./GameCardSkeleton";
import GenreListSkeleton from "./GenreListSkeleton";

interface IProps {
  handleClick: (g: Genre) => void;
}
const GenreList = ({ handleClick }: IProps) => {
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
            <Button fontSize="lg" variant="link" onClick={() => handleClick(g)}>
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
