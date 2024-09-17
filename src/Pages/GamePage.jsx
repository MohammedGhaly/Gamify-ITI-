import { useNavigate, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PlatformIconList from "../Components/PlatformIconList";
import { useAuth } from "../Contexts/AuthContext";
import { useStoreGames } from "../Contexts/StoreGamesContext";
import { useCart } from "../Contexts/CartContext";

function GamePage() {
  const { role } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const { addGame, removeGame, isInCart, setCurrentCartGameId } = useCart();
  const { createStoreGame, deleteStoreGame, setCurrentGameId, isInStore } =
    useStoreGames();
  const { data: game, isLoading } = useGame(id);
  const [isExpanded, setIsExpanded] = useState(false);

  const genres = game?.genres?.map((genre) => genre.name);
  let color =
    game?.metacritic > 80
      ? "lightgreen"
      : game?.metacritic > 60
      ? "#fffc5f"
      : "#ff4646";

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(
    function () {
      if (setCurrentCartGameId) setCurrentCartGameId(id);
      if (setCurrentGameId) setCurrentGameId(id);
    },
    [id, setCurrentGameId, setCurrentCartGameId]
  );

  return (
    <div>
      {isLoading && (
        <Flex w="100%" h="500px" justifyContent="center" alignItems="center">
          <Spinner w={20} h={20} thickness="5px" />
        </Flex>
      )}
      {!isLoading && game.description_raw && (
        <Box w="98vw">
          <Heading
            textAlign="center"
            fontSize={{ lg: "48px" }}
            textShadow="4px 4px 4px #00000022"
            fontWeight={800}
          >
            {game.name}
          </Heading>
          <Flex
            gap={10}
            marginY={10}
            alignItems="start"
            direction={{ base: "column", lg: "row" }}
            justify={{ lg: "space-between" }}
            marginX={10}
          >
            <Box w={{ base: "100%", lg: "40%" }}>
              <Image
                objectFit="contain" // Preserves aspect ratio
                borderRadius="15px"
                src={game.background_image}
                alt={game.name}
              />
              <Box marginY={8}>
                <PlatformIconList
                  platforms={game.parent_platforms.map((p) => p.platform)}
                  size="50px"
                />
              </Box>
              <Flex justify="center" gap={12} marginTop={12}>
                {isInCart ? (
                  <Button
                    colorScheme="blue"
                    color="white"
                    onClick={() => removeGame(game.id)}
                  >
                    remove from Cart
                  </Button>
                ) : (
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      if (!role) {
                        navigate("/login");
                      }
                      addGame(game);
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
                {role === "admin" &&
                  (isInStore ? (
                    <Button
                      colorScheme="blue"
                      color="white"
                      onClick={() => deleteStoreGame(game.id)}
                    >
                      Remove from store
                    </Button>
                  ) : (
                    <Button
                      colorScheme="blue"
                      color="white"
                      onClick={() => createStoreGame(game)}
                    >
                      Add to store
                    </Button>
                  ))}
              </Flex>
            </Box>
            <Box w={{ lg: "55%" }}>
              <Flex marginBottom={10}>
                <Box
                  marginRight={20}
                  bgColor={color}
                  textColor={"white"}
                  fontSize="150px"
                  paddingX={6}
                  borderRadius={12}
                  fontWeight={700}
                  marginY="auto"
                >
                  {game.metacritic}
                </Box>
                <Box>
                  <Box marginBottom={14}>
                    <Heading as="h3">Genres:</Heading>
                    <Flex flexWrap="wrap" gap={4} marginTop={4}>
                      {genres?.map((g) => (
                        <Badge key={g} padding={2} fontSize="20px">
                          {g}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <Heading as="h3">Price:</Heading>
                    <Heading as="h5">{game.price}$</Heading>
                  </Box>
                </Box>
              </Flex>
              {/* description box */}
              <Box>
                <Heading as={"h3"} marginBottom={4}>
                  description
                </Heading>
                <Text fontSize="16px">
                  {isExpanded
                    ? game.description_raw
                    : `${game.description_raw.substring(0, 300)}...`}
                </Text>
                <Button onClick={toggleReadMore} size="sm" mt={2}>
                  {isExpanded ? "See Less" : "See More"}
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
    </div>
  );
}

export default GamePage;
