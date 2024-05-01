import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame"
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const GameDetailsPage = () => {
	const { slug } = useParams();
	const { data: game } = useGame(slug!);
	return (
		<>
			<Heading>{game?.name}</Heading>
			<Text>{game?.description_raw}</Text>
		</>
	)
}

export default GameDetailsPage