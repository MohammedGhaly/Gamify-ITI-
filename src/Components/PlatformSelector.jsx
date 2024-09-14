import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { useGameQuery } from "../Contexts/GameQueryContext";

function PlatformSelector({ selectedPlatform, setSelectedPlatform }) {
  const { data, isLoading, error } = usePlatforms();
  const { removeQuery } = useGameQuery();
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {isLoading && <Spinner />}
        {
          <>
            <MenuItem key="all" onClick={() => removeQuery("platform")}>
              All
            </MenuItem>
            {data.map((platform) => (
              <MenuItem
                onClick={() => setSelectedPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </MenuItem>
            ))}
          </>
        }
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
