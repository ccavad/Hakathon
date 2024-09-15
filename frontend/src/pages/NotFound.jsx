// src/pages/NotFound.js
import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="gray.100"
      textAlign="center"
      p={4}
    >
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        404 - Page Not Found
      </Text>
      <Text fontSize="lg" mb={6}>
        Sorry, the page you are looking for does not exist.
      </Text>
      <Button as={RouterLink} to="/" colorScheme="teal">
        Go to Home
      </Button>
    </Box>
  );
};
