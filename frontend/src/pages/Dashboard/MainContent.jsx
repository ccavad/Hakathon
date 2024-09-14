import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom"; // Import Outlet

const MainContent = () => {
  return (
    <Box flex="1" p={4} bg="#232b2b">
    <Text color="#fff">Main content</Text>
      <Outlet />
    </Box>
  );
};

export default MainContent;
