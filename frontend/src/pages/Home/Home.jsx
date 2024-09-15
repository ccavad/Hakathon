import { Box, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import HomeBackground from "../../assets/HomeBackground.jpg"; // Import the background image

export const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundImage={`url(${HomeBackground})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundAttachment="fixed"
    >
      {/* Glass effect container box */}
      <Box
        width="300px"
        height="200px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="rgba(255, 255, 255, 0.1)" // Semi-transparent background
        backdropFilter="blur(10px)" // Blurred glass effect
        borderRadius="12px" // Rounded corners
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)" // Soft shadow
        border="1px solid rgba(255, 255, 255, 0.3)" // Light border
        p={6}
      >
      <Link
          as={RouterLink}
          to="/"
          fontSize="3xl"
          fontWeight="bold"
          mb={6}
          color="#353839"
          textDecoration="none" // Remove underline
          _hover={{ textDecoration: "none" }} // Ensure no underline on hover
        >
          TRELLO
        </Link>
        {/* Login Button */}
        <Link as={RouterLink} to="/login" width="100%">
          <Button
            backgroundColor="white"
            color="black"
            width="100%" // Full width inside the box
            mb={4}
            borderRadius="8px"
            _hover={{ backgroundColor: "gray.200" }} // Hover effect
          >
            Login
          </Button>
        </Link>
        
        {/* Register Button */}
        <Link as={RouterLink} to="/register" width="100%">
          <Button
            backgroundColor="white"
            color="black"
            width="100%" // Full width inside the box
            borderRadius="8px"
            _hover={{ backgroundColor: "gray.200" }} // Hover effect
          >
            Register
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
