import React, { useState } from "react";
import { Button, Input, HStack } from "@chakra-ui/react";

interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    onAddTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="New todo"
        />
        <Button type="submit" colorScheme="teal">
          Add
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;