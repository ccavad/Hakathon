import React from "react";
import { Box, Text } from "@chakra-ui/react";

const BoardItem = ({ name }) => {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      transition="all 0.3s ease"
      _hover={{
        bg: "gray.100", // Change background color on hover
        transform: "scale(1.05)", // Slightly increase size on hover
        boxShadow: "lg", // Increase shadow on hover
      }}
    >
      <Text fontSize="xl" fontWeight="bold">
        {name}
      </Text>
    </Box>
  );
};

export default BoardItem;
