import React, { useState } from "react";
import { BoardHeader } from "./BoardHeader";

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
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Check, Pen, Plus, X } from "@phosphor-icons/react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { defaultCardModel } from "../../utils/statics/models";
import { useMutative } from "use-mutative";

import {
  addCardInputStyle,
  boardCardStyle,
  boardColumnStyle,
  editableStyle,
  minColumnWidth,
} from "../../assets/styles/chakraStyles";
export const Board = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [boardData, setBoardData] = useMutative({
    todos: [
      {
        id: "231245",
        title: "schedule",
        description: "adasd",
        deadline: "03.03",
        members: ["43"],
      },
    ],
    doing: [
      {
        id: "1244",
        title: "schedule",
        description: "adasd",
        deadline: "03.03",
        members: [],
      },
      {
        id: "122444",
        title: "sche24dule",
        description: "adasd",
        deadline: "03.03",
        members: [],
      },
    ],
    done: [],
  });

  const [columnOrder, setColumnOrder] = useState(Object.keys(boardData));
  const [newCardColumn, setNewCardColumn] = useState(null);
  const [newCardText, setNewCardText] = useState("");
  const [addingNewColumn, setAddingNewColumn] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");
  const [selectedEditCard, setSelectedEditCard] = useState(null);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (type === "COLUMN") {
      const newColumnOrder = Array.from(columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setColumnOrder(newColumnOrder);
    } else {
      const startColumn = source.droppableId;
      const endColumn = destination.droppableId;

      if (startColumn === endColumn) {
        const column = boardData[startColumn];
        const newTasks = Array.from(column);
        newTasks.splice(source.index, 1);
        newTasks.splice(
          destination.index,
          0,
          boardData[startColumn][source.index]
        );

        setBoardData((draft) => {
          draft[startColumn] = newTasks;
        });
      } else {
        const startTasks = Array.from(boardData[startColumn]);
        const [movedTask] = startTasks.splice(source.index, 1);

        const endTasks = Array.from(boardData[endColumn]);
        endTasks.splice(destination.index, 0, movedTask);

        setBoardData((draft) => {
          draft[startColumn] = startTasks;
          draft[endColumn] = endTasks;
        });
      }
    }
  };

  const addNewCard = (columnKey) => {
    if (!newCardText) {
      toast({
        title: "no name",
      });
      return;
    }
    setBoardData((draft) => {
      draft[columnKey].push({
        ...defaultCardModel,
        title: newCardText,
        id: Date.now().toString(),
      });
    });
    setNewCardText("");
    setNewCardColumn(null);
  };

  const handleAddColumn = () => {
    if (!newColumnName) {
      toast({
        title: "no name",
      });
      return;
    }
    setBoardData((draft) => {
      draft[newColumnName] = [];
    });
    setColumnOrder((prevOrder) => [...prevOrder, newColumnName]);
    setNewColumnName("");
    setAddingNewColumn(false);
  };

  const handleCardEdit = (task) => {
    setSelectedEditCard(task);
    onOpen();
  };

  return (
    <Container maxW="1400px">
      <BoardHeader />
      <Box as="main">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="COLUMN"
          >
            {(provided) => (
              <Flex
                ref={provided.innerRef}
                {...provided.droppableProps}
                gap={4}
                alignItems="flex-start"
                p={4}
              >
                {columnOrder.map((columnKey, index) => (
                  <Draggable
                    key={columnKey}
                    draggableId={columnKey}
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        {...boardColumnStyle}
                      >
                        <Editable
                          defaultValue={columnKey}
                          onSubmit={(value) => {
                            setBoardData((prev) => {
                              const newData = { ...prev };
                              newData[value] = newData[columnKey];
                              delete newData[columnKey];
                              return newData;
                            });
                          }}
                          {...editableStyle}
                        >
                          <EditablePreview />
                          <EditableInput />
                        </Editable>
                        <Droppable droppableId={columnKey} type="TASK">
                          {(provided) => (
                            <Flex
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                              direction="column"
                              gap={2}
                            >
                              {boardData[columnKey].map((task, index) => (
                                <Draggable
                                  key={task.id}
                                  draggableId={task.id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <Box
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      {...boardCardStyle}
                                      onDoubleClick={() => handleCardEdit(task)}
                                    >
                                      <Heading as="h4" fontSize={16}>
                                        {task.title}
                                      </Heading>

                                      <Button
                                        position="absolute"
                                        top={0}
                                        right={0}
                                        bg="transparent"
                                        opacity={0.3}
                                        _hover={{
                                          bg: "transparent",
                                          opacity: 1,
                                        }}
                                        onClick={() => handleCardEdit(task)}
                                      >
                                        <Pen color="white" />
                                      </Button>
                                    </Box>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                              {newCardColumn === columnKey && (
                                <>
                                  <Input
                                    {...addCardInputStyle}
                                    placeholder="Enter name for this card"
                                    value={newCardText}
                                    onChange={(e) =>
                                      setNewCardText(e.target.value)
                                    }
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
                                        setNewCardColumn(null);
                                        setNewCardText("");
                                      }}
                                    >
                                      <X />
                                    </Button>
                                  </HStack>
                                </>
                              )}
                              {newCardColumn !== columnKey && (
                                <Button
                                  colorScheme="green"
                                  onClick={() => {
                                    setNewCardText("");
                                    setNewCardColumn(columnKey);
                                  }}
                                >
                                  <Plus />
                                  <Text>Add</Text>
                                </Button>
                              )}
                            </Flex>
                          )}
                        </Droppable>
                      </Box>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
                <Box pr={5}>
                  {addingNewColumn ? (
                    <Flex direction="column" mt={4}>
                      <Input
                        placeholder="Enter column name"
                        value={newColumnName}
                        onChange={(e) => setNewColumnName(e.target.value)}
                      />
                      <HStack mt={2} minWidth={minColumnWidth}>
                        <Button colorScheme="green" onClick={handleAddColumn}>
                          <Check />
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => setAddingNewColumn(false)}
                        >
                          <X />
                        </Button>
                      </HStack>
                    </Flex>
                  ) : (
                    <Button
                      mt={4}
                      onClick={() => setAddingNewColumn(true)}
                      minWidth={minColumnWidth}
                    >
                      Add another list
                    </Button>
                  )}
                </Box>
              </Flex>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedEditCard?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>asd</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};
