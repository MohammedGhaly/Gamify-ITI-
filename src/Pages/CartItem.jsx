import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Img,
  useColorMode,
} from "@chakra-ui/react";
import getCroppedUrl from "../Services/image-url";

function CartItem({ game, removeGame }) {
  const genres = game?.genres?.map((genre) => genre.name);
  const { colorMode } = useColorMode();
  const dynamicBadgeColorValue = colorMode === "light" ? "#ff8800" : "#ff8800";

  return (
    <Flex
      justify="space-between"
      alignItems="center"
      bgColor="#aaaaaa92"
      backdropFilter='blur(3px)'
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
              <Badge
                bgColor={dynamicBadgeColorValue}
                key={g}
                padding={2}
                fontSize="14px"
                marginRight={3}
                borderRadius={6}
                color={colorMode === 'dark' ? 'white' : 'black'}
              >
                {g}
              </Badge>
            ))}
          </Flex>

          <Heading as="h3" fontSize="24px">
            {game.price}$
          </Heading>
        </Box>
      </Flex>
      <Button bgColor="red" onClick={removeGame} color="white">
        Remove
      </Button>
    </Flex>
  );
}

export default CartItem;
