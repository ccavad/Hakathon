import React, { useEffect, useState } from "react";
import { BoardHeader } from "./BoardHeader";
import { CardColumn } from "./CardColumn";
import {
  Box,
  Button,
  Container,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { useMutative } from "use-mutative";
import {
  addCardInputStyle,
  boardCardStyle,
  boardColumnStyle,
  editableStyle,
} from "../../assets/styles/chakraStyles";

import { Check, Plus, X } from "@phosphor-icons/react";
import { defaultCardModel } from "../../utils/statics/models";

export const Board = () => {
  const [boardData, setBoardData] = useMutative({
    todos: [
      {
        id: 231245,
        title: "schedule",
        description: "adasd",
        deadline: "03.03",
        members: ["43"],
      },
    ],
    doing: [
      {
        id: 1244,
        title: "schedule",
        description: "adasd",
        deadline: "03.03",
        members: [],
      },
      {
        id: 122444,
        title: "sche24dule",
        description: "adasd",
        deadline: "03.03",
        members: [],
      },
    ],
    done: [],
  });

  const [newCardColumnIndex, setNewCardColumnIndex] = useState(null);
  const [newCardText, setNewCardText] = useState("");

  const onDragStart = (e, item, fromColumn) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ item, fromColumn }));
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, toColumn) => {
    e.preventDefault();

    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    const { item, fromColumn } = data;

    if (fromColumn === toColumn) return;

    const updatedFromColumn = boardData[fromColumn].filter(
      (t) => t.id !== item.id
    );

    const updatedToColumn = [...boardData[toColumn], item];

    setBoardData((draft) => {
      draft[fromColumn] = updatedFromColumn;
      draft[toColumn] = updatedToColumn;
    });
  };

  const addNewCard = (column) => {
    setBoardData((draft) => {
      draft[column].push({
        ...defaultCardModel,
        title: newCardText,
      });
    });
    setNewCardText("");
    setNewCardColumnIndex(null);
  };

  return (
    <Container maxW="1400px">
      <BoardHeader />
      <Box as="main">
        <Flex gap={10} alignItems="flex-start">
          {Object.keys(boardData).map((columnKey, ind) => (
            <Flex
              key={columnKey}
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, columnKey)}
              direction="column"
              gap={2}
              {...boardColumnStyle}
            >
              <Editable
                onSubmit={(e) => console.log("e", e)}
                defaultValue={columnKey}
                {...editableStyle}
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
              {boardData[columnKey].map((task) => (
                <Box
                  key={task.id}
                  draggable
                  onDragStart={(e) => onDragStart(e, task, columnKey)}
                  onClick={() => alert(task?.description)}
                  {...boardCardStyle}
                >
                  <Heading as="h4" fontSize={16}>
                    {task.title}
                  </Heading>
                  <p>
                    <strong>Deadline:</strong> {task.deadline}
                  </p>
                  <p>
                    <strong>Members:</strong>{" "}
                    {task.members.length > 0 ? task.members.join(", ") : "None"}
                  </p>
                </Box>
              ))}
              {newCardColumnIndex !== null && newCardColumnIndex === ind ? (
                <>
                  <Input
                    {...addCardInputStyle}
                    placeholder="enter name for this card"
                    value={newCardText}
                    onChange={(e) => setNewCardText(e.target.value)}
                  />
                  <HStack>
                    <Button
                      colorScheme="green"
                      onClick={() => addNewCard(columnKey)}
                    >
                      <Check />
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        setNewCardColumnIndex(null);
                        setNewCardText("");
                      }}
                    >
                      <X />
                    </Button>
                  </HStack>
                </>
              ) : (
                <Button
                  colorScheme="green"
                  onClick={() => {
                    setNewCardText("");
                    setNewCardColumnIndex(ind);
                  }}
                >
                  <Plus />
                  <Text>add</Text>
                </Button>
              )}
            </Flex>
          ))}
          <Button>Add another list</Button>
        </Flex>
      </Box>
    </Container>
  );
};
