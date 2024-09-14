function handleFilterSort(gameQuery, games) {
  const genreId = gameQuery.genre?.id;
  const platformId = gameQuery.platform?.id;
  const searchText = gameQuery.searchText || "";
  const order = gameQuery.sortOrder;

  const nameFiltered = games.filter((game) =>
    game.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const genreFiltered = genreId
    ? nameFiltered.filter((game) =>
        game.genres.map((genre) => genre.id).includes(genreId)
      )
    : nameFiltered;

  const platformFiltered = platformId
    ? genreFiltered.filter((game) =>
        Object.values(game.parent_platforms)
          .map((pp) => pp.platform.id)
          .includes(platformId)
      )
    : genreFiltered;

  switch (order) {
    case "name":
      platformFiltered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "-released":
      platformFiltered.sort((a, b) => b.released.localeCompare(a.released));
      break;
    case "-rating":
      platformFiltered.sort((a, b) => b.metacritic - a.metacritic);
      break;
    default:
      break;
  }
  return platformFiltered;
}

export default handleFilterSort;
