import { HStack, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import { Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((data) => (
        <ListItem key={data.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(data.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{data.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
