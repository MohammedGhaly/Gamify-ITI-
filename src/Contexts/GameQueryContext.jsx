import { createContext, useContext, useState } from "react";

const GameQueryContext = createContext(null);

function GameQueryProvider({ children }) {
  const [gameQuery, setGameQuery] = useState({});

  function removeQuery(queryName) {
    const g = { ...gameQuery };
    delete g[queryName];
    setGameQuery(g);
  }

  return (
    <GameQueryContext.Provider value={{ gameQuery, setGameQuery, removeQuery }}>
      {children}
    </GameQueryContext.Provider>
  );
}

function useGameQuery() {
  const context = useContext(GameQueryContext);
  if (context === null)
    throw new Error("useGameQuery must be used within a GameQueryProvider");
  return context;
}

export { GameQueryProvider, useGameQuery };
