import { createContext, useContext, useEffect, useState } from "react";

const CartConetxt = createContext();

function CartProvider({ children }) {
  const [cartGames, setCartGames] = useState([]);
  const [isInCart, setIsInCart] = useState(false);
  const [currentCartGameId, setCurrentCartGameId] = useState(null);

  useEffect(
    function () {
      setIsInCart(
        cartGames.map((game) => game.id).includes(Number(currentCartGameId))
      );
    },
    [currentCartGameId, cartGames]
  );

  function addGame(game) {
    setCartGames([...cartGames, game]);
  }
  function removeGame(gameId) {
    setCartGames(cartGames.filter((g) => g.id !== gameId));
  }
  function resetCart() {
    setCartGames([]);
  }
  return (
    <CartConetxt.Provider
      value={{
        cartGames,
        isInCart,
        addGame,
        removeGame,
        resetCart,
        setCurrentCartGameId,
      }}
    >
      {children}
    </CartConetxt.Provider>
  );
}

function useCart() {
  const context = useContext(CartConetxt);
  if (context === undefined) {
    throw new Error("cartContext is used outside its scope");
  }
  return context;
}

export { CartProvider, useCart };
