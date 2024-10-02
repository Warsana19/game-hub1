import {
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import { Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((data) => (
          <ListItem key={data.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(data.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(data)}
                fontWeight={data.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
