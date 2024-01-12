import React from "react";
import { VStack, Box } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  switchState: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onMoveTodoUp: (id: number) => void;
  onMoveTodoDown: (id: number) => void;
  onToggleSwitch: (id: number) => void;
  isEditMode: boolean;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDeleteTodo,
  onMoveTodoUp,
  onMoveTodoDown,
  onToggleSwitch,
  isEditMode,
}) => {
  return (
    <Box my={4}>
      {" "}
      {/* ここで上下のマージンを追加 */}
      <VStack spacing={4}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            onDelete={() => onDeleteTodo(todo.id)}
            onMoveUp={() => onMoveTodoUp(todo.id)}
            onMoveDown={() => onMoveTodoDown(todo.id)}
            onToggleSwitch={() => onToggleSwitch(todo.id)} // 修正
            isEditMode={isEditMode}
            switchState={todo.switchState}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default TodoList;
