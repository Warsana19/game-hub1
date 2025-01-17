import { Image, ImageProps } from "@chakra-ui/react";
import bulls from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumb from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumb, alt: "recomended", boxSize: "25px" },
    5: { src: bulls, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
