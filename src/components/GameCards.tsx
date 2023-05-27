import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import Icons from "./Icons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/ImageUrl";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

function GameCards({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
        <HStack justifyContent="space-between">
          <Icons platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCards;
