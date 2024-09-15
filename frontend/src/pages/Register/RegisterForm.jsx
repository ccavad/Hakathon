import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import HomeBackground from "../../assets/HomeBackground.jpg"; // Import the background image
import { register } from "../../services/apiService";

export const RegisterForm = () => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false); // Manage button disabled state
  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true); // Start loading
    try {
      const response = await register(data);

      if (response.data.unique === false) {
        // Handle username already exists case
        toast({
          title: "Username Already Taken",
          description:
            "Username already being used, please choose another username.",
          status: "warning",
          position: "bottom-right",
        });
      } else if (response.status >= 200 && response.status < 300) {
        toast({
          title: "Registration Successful",
          description: "You have been successfully signed up.",
          status: "success",
          position: "bottom-right",
        });

        // Clear input fields
        reset();

        // Redirect to /login page
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        toast({
          title: "Registration Failed",
          description:
            "An error occurred during registration. Please try again.",
          status: "error",
          position: "bottom-right",
        });
      }
    } catch (error) {
      toast({
        title: "Registration Failed",
        description:
          error.response?.data?.message ||
          "An error occurred during registration. Please try again.",
        status: "error",
        position: "bottom-right",
      });
    } finally {
      setLoading(false); // Stop loading
    }
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
        <FormControl mb={4} isInvalid={errors.email}>
          <FormLabel color="white">Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter email"
            {...formRegister("email", { required: "Email is required" })}
            borderColor="whiteAlpha.600"
            color="white"
            _placeholder={{ color: "whiteAlpha.800" }}
          />
        </FormControl>

        <FormControl mb={4} isInvalid={errors.username}>
          <FormLabel color="white">Username</FormLabel>
          <Input
            placeholder="Enter username"
            {...formRegister("username", { required: "Username is required" })}
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
            {...formRegister("password", { required: "Password is required" })}
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
          isDisabled={loading || isSubmitting} // Disable button while submitting
        >
          Sign up
        </Button>

        <Text mt={4} color="white">
          Already have an account?
          <Link
            marginLeft={2}
            as={RouterLink}
            to="/login"
            color="#232b2b"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            Sign in
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
