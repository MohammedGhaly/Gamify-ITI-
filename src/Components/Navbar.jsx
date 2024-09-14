import {
  HStack,
  IconButton,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri";
import { RiLogoutBoxFill } from "react-icons/ri";
import ColorModeSwitch from "./ColorModeSwitch";
import { useAuth } from "../Contexts/AuthContext";
import SearchInput from "./SearchInput";
import { IoHomeSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { TbSquareLetterRFilled } from "react-icons/tb";
import { useGameQuery } from "../Contexts/GameQueryContext";
import { memo } from "react";

const NavBar = memo(function NavBar() {
  const { role, resetUser } = useAuth();
  const { colorMode } = useColorMode();

  const { gameQuery, setGameQuery } = useGameQuery();

  const navigate = useNavigate();
  const dynamicTooltipColorValue =
    colorMode === "light" ? "#3182ce" : "#90cdf4";

  return (
    <HStack
      paddingBottom={2}
      paddingX={3}
      spacing={2}
      paddingTop={{ base: 3, md: 0 }}
      justifyContent={"space-between"}
      minHeight={20}
    >
      <Link to="/">
        <Text
          color={dynamicTooltipColorValue}
          fontSize={{ base: "2rem", md: "3rem" }}
          fontFamily={"Rubik"}
          fontStyle="italic"
          fontWeight="700"
          cursor="pointer"
          transitionDuration="0.3s"
          _hover={{ filter: "brightness(110%)", transform: "1.2" }}
        >
          Gamify
        </Text>
      </Link>
      {role === "admin" && (
        <SearchInput
          onSearch={(searchText) => {
            setGameQuery({ ...gameQuery, searchText });
          }}
        />
      )}
      <HStack spacing={2}>
        <Link to="/home" className="nav-item">
          <Tooltip label="home" bgColor={dynamicTooltipColorValue}>
            <IconButton
              colorScheme="blue"
              aria-label="home button"
              overflow="hidden"
              icon={<IoHomeSharp size={20} />}
              borderRadius="50%"
            />
          </Tooltip>
        </Link>
        {role === "admin" && (
          <Link to="/rawg" className="nav-item">
            <Tooltip label="rawg" bgColor={dynamicTooltipColorValue}>
              <IconButton
                colorScheme="blue"
                aria-label="rawg store button"
                overflow="hidden"
                icon={<TbSquareLetterRFilled size={20} />}
                borderRadius="50%"
              />
            </Tooltip>
          </Link>
        )}
        <Link to="/cart" className="nav-item">
          <Tooltip label="cart" bgColor={dynamicTooltipColorValue}>
            <IconButton
              colorScheme="blue"
              aria-label="cart button"
              overflow="hidden"
              icon={<FaShoppingCart size={20} />}
              borderRadius="50%"
            />
          </Tooltip>
        </Link>

        {role !== "" ? (
          <Tooltip label="logout" bgColor={dynamicTooltipColorValue}>
            <IconButton
              colorScheme="blue"
              aria-label="Logout button"
              overflow="hidden"
              icon={<RiLogoutBoxFill size={20} />}
              borderRadius="50%"
              onClick={() => {
                resetUser();
                navigate("/login");
              }}
            />
          </Tooltip>
        ) : (
          <Link to="/login" className="nav-item">
            <Tooltip label="login" bgColor={dynamicTooltipColorValue}>
              <IconButton
                colorScheme="blue"
                aria-label="Login button"
                overflow="hidden"
                icon={<RiLoginBoxFill size={20} />}
                borderRadius="50%"
              />
            </Tooltip>
          </Link>
        )}

        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
});

export default NavBar;
