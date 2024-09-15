import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";

export const CardColumn = ({ title }) => {
  return (
    <Box>
      <Heading as="h4">{title}</Heading>
      <VStack></VStack>
    </Box>
  );
};
