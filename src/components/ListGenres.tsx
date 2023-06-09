import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

function ListGenres({ onSelectGenre, selectedGenre }: Props) {
  const { data: genres, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        {" "}
        Genres
      </Heading>
      <div>
        {genres.map((genre) => (
          <List key={genre.id}>
            <ListItem paddingY="5px">
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize="42px"
                  borderRadius={10}
                  objectFit="cover"
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  variant="link"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          </List>
        ))}
      </div>
    </>
  );
}

export default ListGenres;
