import { createContext, useContext, useEffect, useState } from "react";
import { useGameQuery } from "./GameQueryContext";
import handleFilterSort from "../utils/handleFilterSort";

const URL = "http://localhost:9001/";
const StoreGamesContext = createContext();

function StoreGamesProvider({ children }) {
  const [storeGames, setStoreGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentGameId, setCurrentGameId] = useState(null);
  const [isInStore, setIsInStore] = useState(false);
  const { gameQuery } = useGameQuery();

  useEffect(
    function () {
      // setStoreGames(handleFilterSort(gameQuery, storeGames));
      handleFilterSort(gameQuery, storeGames);
    },
    [gameQuery, storeGames]
  );

  useEffect(function () {
    async function fetchStoreGames() {
      setIsLoading(true);
      try {
        const res = await fetch(`${URL}storeGames`);
        const data = await res.json();
        setIsLoading(false);
        setStoreGames(data);
      } catch (e) {
        setIsLoading(false);
        console.log(e);
        console.log("error happened during fetching cities");
      }
    }
    fetchStoreGames();
  }, []);

  useEffect(
    function () {
      const currentGame = storeGames.find((game) => game.id == currentGameId);
      if (currentGame) {
        setIsInStore(true);
      } else {
        setIsInStore(false);
      }
    },
    [currentGameId, storeGames]
  );

  async function getStoreGame(id) {
    setIsLoading(true);
    try {
      const res = await fetch(`${URL}storeGames/${id}`);
      const data = await res.json();
      setIsLoading(false);
      return data;
    } catch (e) {
      setIsLoading(false);
      console.log(e);
      console.log("error occured during fetching the game");
    }
  }

  async function createStoreGame(newGame) {
    setIsLoading(true);
    try {
      const res = await fetch(`${URL}storeGames`, {
        method: "POST",
        body: JSON.stringify(newGame),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setStoreGames([...storeGames, data]);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
      console.log("error happened during creating city");
    }
  }

  async function deleteStoreGame(gameId) {
    setIsLoading(true);
    try {
      await fetch(`${URL}cities/${gameId}`, {
        method: "DELETE",
      });
      setIsLoading(false);
      setStoreGames(storeGames.filter((game) => game.id !== gameId));
    } catch (e) {
      setIsLoading(false);
      console.log(e);
      console.log("error happened during deletting city");
    }
  }

  return (
    <StoreGamesContext.Provider
      value={{
        storeGames,
        isLoading,
        isInStore,
        setCurrentGameId,
        getStoreGame,
        createStoreGame,
        deleteStoreGame,
      }}
    >
      {children}
    </StoreGamesContext.Provider>
  );
}

function useStoreGames() {
  const context = useContext(StoreGamesContext);
  if (context === undefined)
    throw new Error(
      "'StoreGamesContext' is used outside the 'StoreGamesProvider'"
    );
  return context;
}

export { useStoreGames, StoreGamesProvider };
