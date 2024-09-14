import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import HomeBackground from "../../assets/HomeBackground.jpg"; // Import the background image

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toast = useToast();

  const onSubmit = (data) => {
    console.log(data); // Log form data to the console
    toast({
      title: "Submitted",
      description: "Form data has been submitted",
      status: "info",
      position: "bottom-right",
    });
  };

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
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        width={{ base: "90%", sm: "400px" }}
        padding={6}
        borderRadius="12px"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        backgroundColor="rgba(255, 255, 255, 0.1)" // Semi-transparent background
        backdropFilter="blur(10px)" // Blurred glass effect
        border="1px solid rgba(255, 255, 255, 0.3)" // Light border
        textAlign="center"
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

        <FormControl mb={4} isInvalid={errors.username}>
          <FormLabel color="white">Username</FormLabel>
          <Input
            placeholder="Enter username"
            {...register("username", { required: "Username is required" })}
            borderColor="whiteAlpha.600"
            color="white"
            _placeholder={{ color: "whiteAlpha.800" }}
          />
        </FormControl>

        <FormControl mb={4} isInvalid={errors.password}>
          <FormLabel color="white">Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter password"
            {...register("password", { required: "Password is required" })}
            borderColor="whiteAlpha.600"
            color="white"
            _placeholder={{ color: "whiteAlpha.800" }}
          />
        </FormControl>

        <Button
          colorScheme="teal"
          size="md"
          width="full"
          type="submit"
          backgroundColor="white"
          color="black"
          borderRadius="8px"
          _hover={{ backgroundColor: "gray.200" }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
