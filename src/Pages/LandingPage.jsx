import {
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Button,
  Tooltip,
  Flex,
  Avatar,
  Icon,
  Divider,
  Stack,
  VStack,
  HStack,
  // Link,
  useColorMode,
} from "@chakra-ui/react";
import backGroundImage from "../assets/LandingPage Assets/Vector.png";
import img1 from "../assets/LandingPage Assets/Joystick 1.png";
import img2 from "../assets/LandingPage Assets/MAP.png";
import img3 from "../assets/LandingPage Assets/Group 1184.png";
import { StarIcon } from "@chakra-ui/icons";
import icon1 from "../assets/LandingPage Assets/Ellipse 175.png";
import icon2 from "../assets/LandingPage Assets/Ellipse 175(1).png";
import icon3 from "../assets/LandingPage Assets/Ellipse 175(2).png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


function LandingPage() {
  const locations = [
    { id: 1, top: "67%", left: "28%", label: "South America" },
    { id: 2, top: "28%", left: "51%", label: "Europe" },
    { id: 3, top: "51%", left: "52%", label: "Africa" },
    { id: 4, top: "74%", left: "81%", label: "Australia" },
    { id: 5, top: "26%", left: "13.5%", label: "North America" },
    { id: 6, top: "24%", left: "70%", label: "Asia" },
  ];
  const { colorMode } = useColorMode();
  const dynamicTooltipColorValue =
    colorMode === "light" ? "#3182ce" : "#90cdf4";

  return (
    <GridItem
      pt={{ base: "20px", md: "60px" }}
      pl={{ base: "5px", md: "10px" }}
      area={"main"}
      bgImage={`url(${backGroundImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} justifyContent="center">
        <Box
          w={{ base: "95%", md: "90%" }}
          height={{ base: "auto", md: "500px" }}
          color="black"
          textAlign="left"
          p={{ base: 4, md: 10 }}
          ml={{ base: 0, md: 50 }}
          position="relative"
          overflow="hidden"
          borderRadius="md"
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            color={dynamicTooltipColorValue}
            mb={2}
            pb={2}
          >
            Proved By prodesigner
          </Text>
          <Heading
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            mb={4}
          >
            Experience Gaming Like Never Before
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color={dynamicTooltipColorValue}
            maxW="xl"
            mx="auto"
            mb={6}
          >
            Unleash Your Gaming Potential, Discover Your Next Adventure ,Join the Gaming Revolution
          </Text>
          
          <Link to="/login">
          <Button
            bgColor={dynamicTooltipColorValue}
            size={{ base: "md", md: "lg" }}
            fontSize="sm"
            borderRadius="full"
            color="black"
          >
            Login Now
          </Button>
          </Link>
        </Box>

        <Box
          height={{ base: "300px", md: "500px" }}
          mr={{ base: 0, md: 50 }}
          transition="transform 0.5s ease-in-out"
          _hover={{ transform: "scale(1.2) rotate(360deg)" }}
        >
          <Image width="100%" src={img1} />
        </Box>
      </SimpleGrid>

      {/* Locations Section */}
      <Grid mt={20} templateColumns="repeat(1, 1fr)" gap={6}>
        <GridItem width="100%" textAlign="center" mt={{ base: 12, md: 200 }}>
          <Heading size={{ base: "xl", md: "2xl" }} color={dynamicTooltipColorValue}>
          Gaming Without Borders, Our Global Presence 
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} pt={4}>
          A Global Playground for Gamers, Discover Our Worldwide Gaming Hotspots.
          </Text>
        </GridItem>

        <GridItem>
          <Box
            position="relative"
            width="100%"
            maxW="800px"
            margin="0 auto"
            bg="grey"
            borderRadius="50px"
            transition="transform 0.5s ease-in-out"
            _hover={{ transform: "scale(1.2)" }}
          >
            <Image src={img2} alt="World Map" />
            {locations.map((location) => (
              <Tooltip bg={dynamicTooltipColorValue} label={location.label} key={location.id}>
                <Box
                  position="absolute"
                  top={location.top}
                  left={location.left}
                  boxSize={{ base: "30px", md: "50px" }}
                  bgImage={img3}
                  borderRadius="50%"
                  transition="transform 0.2s"
                  _hover={{
                    transform: "scale(1.3)",
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
            ))}
          </Box>
        </GridItem>
      </Grid>

      {/* Customer Section */}
      <Grid>
        <GridItem
          w="95%"
          h="auto"
          m="0 auto"
          borderRadius='30px'
          mt={{ base: "80px", md: "210px" }}
          // bg={dynamicTooltipColorValue}
        >
          <Heading
            m="0 auto"
            color={dynamicTooltipColorValue}
            size={{ base: "xl", md: "2xl" }}
            w={{ base: "80%", md: "30%" }}
            mt={20}
            textAlign="center"
          >
            Rated by Gamers, Loved by All
          </Heading>
          <Text
            w={{ base: "90%", md: "40%" }}
            m="0 auto"
            fontSize={{ base: "md", md: "lg" }}
            pt={5}
            textAlign="center"
          >
           Join Thousands of Happy Players. Your Voice, Our Game: Player Testimonials
          </Text>

          <Flex justifyContent="center" gap={10} mt={50} flexWrap="wrap">
            
            <Box
              bg={dynamicTooltipColorValue}
              p={4}
              rounded="md"
              maxW="sm"
              border="2px solid "
              borderColor={dynamicTooltipColorValue}
              transition="0.5s"
              _hover={{
                borderColor: "black",
                transform: "scale(1.1)",
                bg:'dynamicTooltipColorValue'
              }}
              width={{ base: "90%", md: "auto" }}
              mb={{ base: 4, md: 0 }}
            >
              <Flex alignItems="center" mb={4}>
                <Avatar src={icon1} name="Viez Robert" size="lg" mr={4} />
                <Box>
                  <Heading color="black" as="h4" size="md">
                    Viez Robert
                  </Heading>
                  <Text color="black" fontWeight="100">
                    Warsaw, Poland
                  </Text>
                </Box>
                <Flex ml="auto" alignItems="center">
                  <Text color="black" mr={1} fontSize="lg">
                    4.5
                  </Text>
                  <Icon as={StarIcon} color="orange.400" />
                </Flex>
                
              </Flex>
              <Text color="black" fontSize={{ base: "md", md: "lg" }}>
              As a long-time gamer, I appreciate the level of detail and customization options. Feels like the game is made for true fans!
              </Text>
            </Box>

            <Box
              bg={dynamicTooltipColorValue}
              p={4}
              rounded="md"
              maxW="sm"
              border="2px solid "
              borderColor={dynamicTooltipColorValue}
              transition="0.5s"
              _hover={{
                borderColor: "black",
                transform: "scale(1.1)",
              }}
              width={{ base: "90%", md: "auto" }}
              mb={{ base: 4, md: 0 }}
            >
              <Flex alignItems="center" mb={4}>
                <Avatar src={icon2} name="Yessica Christy" size="lg" mr={4} />
                <Box>
                  <Heading color="black" as="h4" size="md">
                   Yessica Christy
                  </Heading>
                  <Text color="black" fontWeight="100">
                  Shanxi, China
                  </Text>
                </Box>
                <Flex ml="auto" alignItems="center">
                  <Text color="black" mr={1} fontSize="lg">
                    5
                  </Text>
                  <Icon as={StarIcon} color="orange.400" />
                </Flex>
                
              </Flex>
              <Text fontSize={{ base: "md", md: "lg" }} color="black" >
              Epic events and challenges! Always something new to do. This is my go-to gaming site..
              </Text>
            </Box>

            <Box
              bg={dynamicTooltipColorValue}
              p={4}
              rounded="md"
              maxW="sm"
              border="2px solid "
              borderColor={dynamicTooltipColorValue}
              transition="0.5s"
              _hover={{
                borderColor: "black",
                transform: "scale(1.1)",
              }}
              width={{ base: "90%", md: "auto" }}
              mb={{ base: 4, md: 0 }}
            >
              <Flex alignItems="center" mb={4}>
                <Avatar src={icon3} name="Kim Young Jou" size="lg" mr={4} />
                <Box>
                  <Heading color="black" as="h4" size="md">
                  Kim Young Jou
                  </Heading>
                  <Text color="black" fontWeight="100">
                  Seoul, South Korea
                  </Text>
                </Box>
                <Flex ml="auto" alignItems="center">
                  <Text color="black" mr={1} fontSize="lg">
                    4
                  </Text>
                  <Icon as={StarIcon} color="orange.400" />
                </Flex>
                
              </Flex>
              <Text color="black" fontSize={{ base: "md", md: "lg" }}>
              Great variety of games! The only downside is occasional server lag, but overall, it has been a blast.
              </Text>
            </Box>
            
            {/* Repeat for other customers */}
          </Flex>
        </GridItem>
      </Grid>

      {/* Footer Section */}
      <Box mt={{ base: 100, md: 450 }} as="footer" bg="black" color="white" py={10}>
  <Box maxW="1200px" mx="auto" px={4}>
    {/* Footer content */}
    <Stack direction={{ base: "column", md: "row" }} justify="space-between" spacing={10}>
      {/* Left Section */}
      <VStack align="start">
        <Text
          color={dynamicTooltipColorValue}
          fontSize={{ base: "1.5rem", md: "2rem" }}
          fontFamily={"Rubik"}
          fontStyle="italic"
          fontWeight="700"
          transitionDuration="0.3s"
          _hover={{ filter: "brightness(110%)", transform: "scale(1.2)" }}
        >
          Gamify
        </Text>
        <Text textAlign='left' pt={4} fontSize={{ base: 'sm', md: 'md' }} maxW="300px">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
        <Text pt={4} fontSize='sm'>@Gamify</Text>
      </VStack>

      {/* Middle Section */}
      <VStack align="start">
        <Text color={dynamicTooltipColorValue} pb={4} fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold">About Us</Text>
        <Link fontSize={{ base: 'sm', md: 'md' }} href="#">Zeux</Link>
        <Link fontSize={{ base: 'sm', md: 'md' }} href="#">Portfolio</Link>
        <Link fontSize={{ base: 'sm', md: 'md' }} href="#">Careers</Link>
        <Link fontSize={{ base: 'sm', md: 'md' }} href="#">Contact Us</Link>
      </VStack>

      {/* Right Section */}
      <VStack align="start">
        <Text color={dynamicTooltipColorValue} pb={4} fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold">Contact Us</Text>
        <Text textAlign='left' fontSize={{ base: 'sm', md: 'md' }} maxW="300px">
        Join Our Gaming Community And Follow Us for the Latest Updates
        </Text>
        <Text fontSize={{ base: 'sm', md: 'md' }}>+908 89097 890</Text>

        {/* Social Icons */}
        <HStack spacing={4} mt={4}>
          <Icon
            as={FaFacebook}
            boxSize={6}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.2)', color: dynamicTooltipColorValue }}
          />
          <Icon
            as={FaInstagram}
            boxSize={6}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.2)', color: dynamicTooltipColorValue }}
          />
          <Icon
            as={FaTwitter}
            boxSize={6}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.2)', color: dynamicTooltipColorValue }}
          />
          <Icon
            as={FaLinkedin}
            boxSize={6}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.2)', color: dynamicTooltipColorValue }}
          />
        </HStack>
      </VStack>
    </Stack>

    {/* Divider and Copyright Section */}
    <Divider my={8} />
    <Text textAlign="center" fontSize={{ base: "xs", md: "sm" }}>
      © 2024 prodesigner All rights reserved
    </Text>
  </Box>
</Box>


    </GridItem>
  );
}

export default LandingPage;
