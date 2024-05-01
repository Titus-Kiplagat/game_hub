import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticalScore from "./CriticalScore";
import getCroppedImageUrl from "../services/image_url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { background_image, name, parent_platforms, metacritic, rating_top: rating } = game;
  return (
    <Card>
      <Image src={getCroppedImageUrl(background_image)} borderRadius="lg" />
      <CardBody>
        <Heading fontSize="2xl" noOfLines={1}>
          <Link to={`/games/${game.slug}`}>{name}</Link>
        </Heading>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={parent_platforms.map((p) => p.platform)}
          />
          <CriticalScore score={metacritic} />
        </HStack>
        <Emoji rating={rating} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
