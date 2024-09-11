import { Badge } from "@chakra-ui/react";

function CriticScore({ metacriticScore }) {
  let color =
    metacriticScore > 80 ? "green" : metacriticScore > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={15}
      borderRadius={4}
      paddingX={2}
      paddingY={1.2}
    >
      {metacriticScore}
    </Badge>
  );
}

export default CriticScore;
