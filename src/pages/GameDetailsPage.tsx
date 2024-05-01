import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttribute";

const GameDetailsPage = () => {

  const { slug } = useParams();
	const { data: game, isPending, error } = useGame(slug!);

	if (isPending) return <Spinner />;
	if (error && !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
			<ExpandableText>{game.description_raw}</ExpandableText>
			<GameAttributes game={game} />
    </>
  );
};

export default GameDetailsPage;
