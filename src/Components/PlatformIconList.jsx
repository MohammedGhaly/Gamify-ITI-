import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";

const iconsMap = {
  pc: FaWindows,
  xbox: FaXbox,
  playstation: FaPlaystation,
  nintendo: SiNintendo,
  web: BsGlobe,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  android: FaAndroid,
};

function PlatformIconList({ platforms, size = "1em" }) {
  return (
    <HStack marginY={1} justify="center">
      {platforms?.map((platform) => (
        <Icon
          key={platform.id}
          as={iconsMap[platform.slug]}
          color="gray.500"
          w={size}
          h={size}
        >
          {platform.name}
        </Icon>
      ))}
    </HStack>
  );
}

export default PlatformIconList;
