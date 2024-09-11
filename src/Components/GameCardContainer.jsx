import { Box } from "@chakra-ui/react";

function GameCardContainer({ children }) {
  return (
    <Box overflow="hidden" borderRadius={10}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
