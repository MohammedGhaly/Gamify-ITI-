import { Badge, Box, Button, Flex, Heading, Img } from "@chakra-ui/react";
import getCroppedUrl from "../Services/image-url";

function CartItem({ game, removeGame }) {
  const genres = game?.genres?.map((genre) => genre.name);

  return (
    <Flex
      justify="space-between"
      alignItems="center"
      bgColor="#07060c"
      padding={6}
      borderRadius="10px"
    >
      <Flex gap={10}>
        <Img
          src={getCroppedUrl(game.background_image)}
          w="140px"
          objectFit={"contain"}
          borderRadius="10px"
        />
        <Box>
          <Flex gap={15} justify="left" alignItems="center" marginBottom={6}>
            <Heading
              as="h2"
              display="inline-block"
              fontWeight={700}
              fontSize="28px"
            >
              {game.name}
            </Heading>
            {genres.map((g) => (
              <Badge key={g} padding={2} fontSize="14px" marginRight={3}>
                {g}
              </Badge>
            ))}
          </Flex>

          <Heading as="h3" fontSize="24px">
            {game.price}$
          </Heading>
        </Box>
      </Flex>
      <Button bgColor="red" onClick={removeGame}>
        Remove
      </Button>
    </Flex>
  );
}

export default CartItem;
