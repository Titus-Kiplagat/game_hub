import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

const GameDetailsPage = () => {

  const { slug } = useParams();
  const { data: game } = useGame(slug!);
  return (
    <>
      <Heading>{game?.name}</Heading>
			<ExpandableText>{game?.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailsPage;
