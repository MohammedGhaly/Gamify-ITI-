import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useCart } from "../Contexts/CartContext";
import CartItem from "./CartItem";
import bgImage from '../assets/Vector.png'

function CartPage() {
  const { cartGames, removeGame, submitOrder } = useCart();

  return (
    <>
      <Box bgImage={bgImage} minH='89vh'>
        <Heading
          textAlign="center"
          fontSize="48px"
          fontWeight={700}
          marginBottom={20}
        >
          Cart
        </Heading>
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
          {cartGames.length > 0 && (
            <Button
              colorScheme="orange"
              w="fit-content"
              marginTop={6}
              marginX="auto"
              padding={6}
              onClick={() => submitOrder()}
            >
              Order Now
            </Button>
          )}
        </Flex>
      </Box>
    </>
  );
}

export default CartPage;
