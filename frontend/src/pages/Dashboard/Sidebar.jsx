import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      bg="#232b2b"
      w="200px"
      p={4}
    >
      <Link
        as={RouterLink}
        to="/dashboard/boards"
        display="block"
        color="#fff"
        px={4}
        py={2}
        borderRadius="md"
        _hover={{ 
          bg: "gray.700", // Background color on hover
          color: "white", // Text color on hover
          textDecoration: "none" // Remove underline on hover
        }}
        _active={{ 
          bg: "gray.600" // Background color when the link is active (clicked)
        }}
      >
        Boards
      </Link>
    </Box>
  );
};

export default Sidebar;
