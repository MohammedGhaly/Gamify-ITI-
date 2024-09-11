import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function GameGrid({ gameQuery }) {
  const { data, error, isLoading } = useGames(gameQuery);

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, "2xl": 4 }}
      spacing={4}
      justifyContent="center"
      paddingY={2}
    >
      {isLoading &&
        skeltons.map((s) => (
          <GameCardContainer key={s}>
            <GameCardSkeleton key={s} />
          </GameCardContainer>
        ))}
      {data !== undefined &&
        !isLoading &&
        data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
}

export default GameGrid;
