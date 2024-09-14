import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenresList from "../Components/GenresList";
import GameHeading from "../Components/GameHeading";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";
import GameGrid from "../Components/GameGrid";
import { useGameQuery } from "../Contexts/GameQueryContext";

function RawgStorePage() {
  const { gameQuery, setGameQuery } = useGameQuery();
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        marginTop={2}
        marginBottom={20}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenresList
              setSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} paddingX={8}>
          <GameHeading gameQuery={gameQuery} />

          <HStack spacing={3} marginBottom={4}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              setSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default RawgStorePage;
