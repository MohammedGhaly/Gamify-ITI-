import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { useStoreGames } from "../Contexts/StoreGamesContext";
import handleFilterSort from "../utils/handleFilterSort";
import { useGameQuery } from "../Contexts/GameQueryContext";

const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function StoreGameGrid() {
  const { storeGames: data, isLoading } = useStoreGames();
  const { gameQuery } = useGameQuery();
  const displayedGames = data ? handleFilterSort(gameQuery, data) : [];

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
      {displayedGames.length > 0 &&
        !isLoading &&
        displayedGames.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
}

export default StoreGameGrid;
