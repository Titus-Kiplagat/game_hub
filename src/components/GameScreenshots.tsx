import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
	gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
	console.log(gameId)
  const { data: screenshots, isPending, error } = useScreenshots(gameId);
	console.log(screenshots)

  if (isPending) return null;

  if (error) throw error;
	
	return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
