import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../Services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import { useGameQuery } from "../Contexts/GameQueryContext";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

function GenresList({ setSelectedGenre, selectedGenre }) {
  const { data, isLoading, error } = useGenres();
  const { removeQuery } = useGameQuery();
  if (error) return null;

  return (
    <>
      <Heading fontSize={24} paddingBottom={4}>
        Genres
      </Heading>
      <List>
        {isLoading ? (
          skeletons.map((s) => (
            <ListItem key={s} paddingY="5px">
              <GenreSkeleton />
            </ListItem>
          ))
        ) : (
          <>
            <ListItem key="all" onClick={() => removeQuery("genre")}>
              <Heading fontSize={18} cursor="pointer">
                All
              </Heading>
            </ListItem>
            {data.map((genre) => (
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    src={getCroppedUrl(genre.image_background)}
                    boxSize="32px"
                    borderRadius={8}
                    objectFit="cover"
                  />
                  <Button
                    whiteSpace="normal"
                    textAlign="left"
                    fontWeight={
                      genre.id === selectedGenre?.id ? "bold" : "normal"
                    }
                    variant="link"
                    fontSize="lg"
                    onClick={() => {
                      setSelectedGenre(genre);
                    }}
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </>
        )}
      </List>
    </>
  );
}

export default GenresList;
