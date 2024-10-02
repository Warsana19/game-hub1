import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  query: GameQuery;
}

const GameHeading = ({ query }: Props) => {
  const heading = `${query.platform?.name || ""} ${
    query.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
