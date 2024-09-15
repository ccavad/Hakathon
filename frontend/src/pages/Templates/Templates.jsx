import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

export const Templates = () => {
  return (
    <Center h="100vh" bg="transparent">
      <Box
        p={6}
        bg="gray.100"
        borderRadius="md"
        shadow="md"
        textAlign="center"
        maxW="md"
      >
        <Text fontSize="2xl" mb={4}>
          🚧 Under Construction 🚧
        </Text>
        <Text fontSize="lg">
          This page is currently under construction. Please check back later.
        </Text>
      </Box>
    </Center>
  );
};
