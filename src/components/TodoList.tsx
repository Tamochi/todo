import React from "react";
import { VStack, Box } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onMoveTodoUp: (id: number) => void;
  onMoveTodoDown: (id: number) => void;
  isEditMode: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo, onMoveTodoUp, onMoveTodoDown, isEditMode }) => {
  return (
    <Box my={4}> {/* ここで上下のマージンを追加 */}
      <VStack spacing={4}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} onDelete={() => onDeleteTodo(todo.id)} onMoveUp={() => onMoveTodoUp(todo.id)} onMoveDown={() => onMoveTodoDown(todo.id)} isEditMode={isEditMode} />
        ))}
      </VStack>
    </Box>
  );
};

export default TodoList;