import { useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import { MdOutlineModeNight } from "react-icons/md";

function ColorModeSwitch() {
  const {toggleColorMode } = useColorMode();

  return (
    <Tooltip label="color mode" bgColor='#ff8800'>
      <IconButton
        colorScheme="orange"
        aria-label="Search database"
        icon={<MdOutlineModeNight size={20} />}
        borderRadius="50%"
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
}

export default ColorModeSwitch;
