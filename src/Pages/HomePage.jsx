import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenresList from "../Components/GenresList";
import GameHeading from "../Components/GameHeading";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";
import StoreGameGrid from "../Components/StoreGameGrid";
import { useGameQuery } from "../Contexts/GameQueryContext";
import bgImage from "../assets/Vector.png";

function HomePage() {
  const { gameQuery, setGameQuery } = useGameQuery();
  return (
    <>
      <Grid
        bgImage={bgImage}
        templateAreas={{
          base: ` "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        marginTop={2}
        paddingBottom={20}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenresList
              setSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
              selectedGenre={gameQuery?.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} paddingX={8}>
          <GameHeading gameQuery={gameQuery} />

          <HStack spacing={3} marginBottom={4}>
            <PlatformSelector
              selectedPlatform={gameQuery?.platform}
              setSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery?.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <StoreGameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default HomePage;
