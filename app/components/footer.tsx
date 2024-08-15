import { Box, Flex, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <Box bg="teal.500" color="white" p={4} mt={8}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
      >
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </Text>
        <Flex mt={{ base: 4, md: 0 }} gap={4}> {/* Use gap instead of spacing */}
          <NextLink href="/" passHref legacyBehavior>
            <Link color="white">Home</Link>
          </NextLink>
          <NextLink href="/about" passHref legacyBehavior>
            <Link color="white">About</Link>
          </NextLink>
          <NextLink href="/contact" passHref legacyBehavior>
            <Link color="white">Contact</Link>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
