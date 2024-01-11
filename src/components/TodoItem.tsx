import { Box, Switch, HStack, Text, IconButton } from "@chakra-ui/react";
import { CloseIcon, ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import React from "react";

interface TodoItemProps {
  text: string;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isEditMode: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, onDelete, onMoveUp, onMoveDown, isEditMode }) => {
  return (
    <HStack justifyContent="space-between" width="100%">
      <HStack>
        <Switch size="lg" colorScheme="green" />
        <Text fontSize="xl" flexGrow={1}>{text}</Text>
      </HStack>
      {isEditMode && (
        <>
          <IconButton
            aria-label="Move todo up"
            icon=<ArrowUpIcon />
            onClick={onMoveUp}
          />
          <IconButton
            aria-label="Move todo down"
            icon=<ArrowDownIcon />
            onClick={onMoveDown}
          />
          <IconButton
            aria-label="Delete todo"
            icon=<CloseIcon />
            onClick={onDelete}
          />
        </>
      )}
    </HStack>
  );
};

export default TodoItem;