import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import BoardItem from "./BoardItem"; // Import BoardItem component

const boards = [
  { id: 1, name: "Board 1" },
  { id: 2, name: "Board 2" },
  { id: 3, name: "Board 3" },
];

const Boards = () => {
  return (
    <Box p={4} bg="#232b2b" minHeight="100vh">
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {boards.map((board) => (
          <BoardItem key={board.id} name={board.name} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Boards;
