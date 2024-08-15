// components/Navbar.tsx
import { Box, Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
      <Box className="navbar" p={4}>
        <Flex justify="space-between" align="center">
          <Text fontSize="xl" color="white">
            My Website
          </Text>
          <Flex>
            <NextLink href="/" passHref legacyBehavior>
              <a style={{ color: "white", marginRight: "16px" }}>Home</a>
            </NextLink>
            <NextLink href="/about" passHref legacyBehavior>
              <a style={{ color: "white" }}>About</a>
            </NextLink>
          </Flex>
        </Flex>
      </Box>
  );
};

export default Navbar;
