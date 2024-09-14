import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Trello from "../../assets/trello.svg";

const Header = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [workplaceName, setWorkplaceName] = useState("");

  const handleCreateClick = () => setIsCreating(!isCreating);
  const handleWorkplaceNameChange = (e) => setWorkplaceName(e.target.value);
  const handleCreateWorkplace = () => {
    // Handle workplace creation logic
    console.log("Creating workplace:", workplaceName);
    setWorkplaceName("");
    setIsCreating(false);
  };

  return (
    <Box bg="#232b2b" color="white" p={4}>
      <Flex align="center">
        <Flex align="center" mr={4}>
          <Link to="/dashboard">
            <Flex align="center">
              <Box as="img" src={Trello} alt="Trello Logo" boxSize="30px" />
              <Text fontSize="2xl" ml={2}>
                Trello
              </Text>
            </Flex>
          </Link>
        </Flex>
        <Flex align="center" gap={4} mr="auto">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="transparent"
              color="white"
              _hover={{ bg: "gray.700", color: "white" }}
              _active={{ bg: "gray.600" }}
            >
              Workplaces
            </MenuButton>
            <MenuList bg="gray.600" border="none">
              <MenuItem
                bg="gray.600"
                _hover={{ bg: "gray.700", color: "white" }}
                _focus={{ bg: "gray.700", color: "white" }}
              >
                Workplace 1
              </MenuItem>
              <MenuItem
                bg="gray.600"
                _hover={{ bg: "gray.700", color: "white" }}
                _focus={{ bg: "gray.700", color: "white" }}
              >
                Workplace 2
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="transparent"
              color="white"
              _hover={{ bg: "gray.700", color: "white" }}
              _active={{ bg: "gray.600" }}
              onClick={handleCreateClick}
            >
              Create
            </MenuButton>
            <MenuList bg="gray.700" color="white" border="none">
              {isCreating && (
                <Box p={4}>
                  <Input
                    placeholder="Enter workplace name"
                    value={workplaceName}
                    onChange={handleWorkplaceNameChange}
                    mb={2}
                  />
                  <Button onClick={handleCreateWorkplace}>
                    Create Workplace
                  </Button>
                </Box>
              )}
            </MenuList>
          </Menu>
        </Flex>
        {/* Profile Dropdown */}
        <Menu>
          <MenuButton
            as={Button}
            bg="transparent"
            color="white"
            _hover={{ bg: "gray.700", color: "white" }}
            _active={{ bg: "gray.600" }}
          >
            <Avatar name="Profile" src="https://bit.ly/2k1jrfw" size="sm" />
          </MenuButton>
          <MenuList bg="gray.700" color="white" border="none">
            <MenuItem
              bg="gray.700"
              _hover={{ bg: "gray.600", color: "white" }}
              _focus={{ bg: "gray.600", color: "white" }}
            >
              Profile
            </MenuItem>
            <MenuItem
              bg="gray.700"
              _hover={{ bg: "gray.600", color: "white" }}
              _focus={{ bg: "gray.600", color: "white" }}
            >
              Settings
            </MenuItem>
            <MenuItem
              bg="gray.700"
              _hover={{ bg: "gray.600", color: "white" }}
              _focus={{ bg: "gray.600", color: "white" }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Header;
