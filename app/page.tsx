"use client";
import { Flex ,Container, Box, Text, Grid, HStack} from '@chakra-ui/react';
export default function Page() {
  return (
    <>
      <Container maxW="container.xl" p={4}>
        <Text fontSize="2xl" align="right">This is inside the container</Text>
      </Container>
      <Flex direction="column"  >
        <HStack gap={5}>
        <Box p={10} shadow="md" borderWidth="1px"><Text fontSize="xl">Item 1</Text></Box>
        <Box p={10} shadow="md" borderWidth="1px"><Text fontSize="xl">Item 2</Text></Box>
        <Box p={10} shadow="md" borderWidth="1px"><Text fontSize="xl">Item 3</Text></Box>
        <Box p={10} shadow="md" borderWidth="1px"><Text fontSize="xl">Item 4</Text></Box>
        <Box p={10} shadow="md" borderWidth="1px"><Text fontSize="xl">Item 5</Text></Box>
        </HStack>
      </Flex>
    </>
  );
}
