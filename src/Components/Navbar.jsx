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
// import { FaInfo } from "react-icons/fa";
import React from "react";
import { useAuth } from "../Contexts/AuthContext";
import SearchInput from "./SearchInput";
import { IoHomeSharp } from "react-icons/io5";

const NavBar = React.memo(function NavBar() {
  const { role, resetUser } = useAuth();
  const { colorMode } = useColorMode();
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
      {role === "admin" && <SearchInput />}
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
