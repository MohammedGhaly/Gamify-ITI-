import { Flex, Heading } from "@chakra-ui/react";
import { useCart } from "../Contexts/CartContext";
import CartItem from "./CartItem";

function CartPage() {
  const { cartGames, removeGame } = useCart();
  return (
    <>
      <Heading
        textAlign="center"
        fontSize="48px"
        fontWeight={700}
        marginBottom={20}
      >
        Cart
      </Heading>
      {
        <Flex direction="column" gap={4} marginX={10}>
          {cartGames.length > 0 ? (
            cartGames.map((game) => (
              <CartItem
                key={game.id}
                game={game}
                removeGame={() => removeGame(game.id)}
              />
            ))
          ) : (
            <Heading marginTop="100px" textAlign="center" fontSize="24px">
              There are no items to show 🚫
            </Heading>
          )}
        </Flex>
      }
    </>
  );
}

export default CartPage;
