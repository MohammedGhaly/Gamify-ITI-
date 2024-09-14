import useData from "./useData";

function useGames(gameQuery) {
  return useData(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        id: gameQuery.id,
      },
    },
    [gameQuery]
  );
}

export default useGames;
