import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedUrl from "../Services/image-url";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <Link to={`/game/${game.id}`}>
      <Card transitionDuration="0.3s" _hover={{ filter: "brightness(0.85)" }}>
        <Image src={getCroppedUrl(game.background_image)} />
        <CardBody>
          <HStack marginY={2} justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore metacriticScore={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
}

export default GameCard;
