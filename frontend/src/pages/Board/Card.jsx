import { Box } from "@chakra-ui/react";
import React from "react";

export const Card = ({ text }) => {
  return (
    <Box padding={4} borderRadius={5} bg="black">
      <Text color="white">{text}</Text>
    </Box>
  );
};
