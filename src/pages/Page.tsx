import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import {
  Container,
  Flex,
  Text,
  Switch,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

interface Todo {
  switchState: boolean;
  id: number;
  text: string;
}

const Page: React.FC = () => {
  const { pageId } = useParams<{ pageId: "page1" | "page2" | "page3" }>();

  const pageTitleMap = {
    page1: "ほいくえんにいくまえ",
    page2: "でかけるとき",
    page3: "ねるまでにやること",
  };

  const pageTitle = pageId ? pageTitleMap[pageId] : "";

  const [todos1, setTodos1] = useState<Todo[]>([]);
  const [todos2, setTodos2] = useState<Todo[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);

  // Load todos from local storage when pageId changes
  useEffect(() => {
    const storedTodos1 = localStorage.getItem(`${pageId}-1`);
    const storedTodos2 = localStorage.getItem(`${pageId}-2`);
    if (storedTodos1) {
      setTodos1(JSON.parse(storedTodos1));
    } else {
      setTodos1([]);
    }
    if (storedTodos2) {
      setTodos2(JSON.parse(storedTodos2));
    } else {
      setTodos2([]);
    }
  }, [pageId]);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem(`${pageId}-1`, JSON.stringify(todos1));
    localStorage.setItem(`${pageId}-2`, JSON.stringify(todos2));
  }, [todos1, todos2, pageId]);

  const addTodo1 = (text: string) => {
    const newTodo = { id: Date.now(), text, switchState: false };
    setTodos1((prevTodos) => [...prevTodos, newTodo]);
  };

  const addTodo2 = (text: string) => {
    const newTodo = { id: Date.now(), text, switchState: false };
    setTodos2((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo1 = (id: number) => {
    setTodos1((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const deleteTodo2 = (id: number) => {
    setTodos2((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const moveTodoUp1 = (id: number) => {
    setTodos1((prevTodos) => {
      const index = prevTodos.findIndex((todo) => todo.id === id);
      if (index === 0) return prevTodos; // Already at top
      const newTodos = [...prevTodos];
      const temp = newTodos[index];
      newTodos[index] = newTodos[index - 1];
      newTodos[index - 1] = temp;
      return newTodos;
    });
  };

  const moveTodoDown1 = (id: number) => {
    setTodos1((prevTodos) => {
      const index = prevTodos.findIndex((todo) => todo.id === id);
      if (index === prevTodos.length - 1) return prevTodos; // Already at bottom
      const newTodos = [...prevTodos];
      const temp = newTodos[index];
      newTodos[index] = newTodos[index + 1];
      newTodos[index + 1] = temp;
      return newTodos;
    });
  };

  const moveTodoUp2 = (id: number) => {
    setTodos2((prevTodos) => {
      const index = prevTodos.findIndex((todo) => todo.id === id);
      if (index === 0) return prevTodos; // Already at top
      const newTodos = [...prevTodos];
      const temp = newTodos[index];
      newTodos[index] = newTodos[index - 1];
      newTodos[index - 1] = temp;
      return newTodos;
    });
  };

  const moveTodoDown2 = (id: number) => {
    setTodos2((prevTodos) => {
      const index = prevTodos.findIndex((todo) => todo.id === id);
      if (index === prevTodos.length - 1) return prevTodos; // Already at bottom
      const newTodos = [...prevTodos];
      const temp = newTodos[index];
      newTodos[index] = newTodos[index + 1];
      newTodos[index + 1] = temp;
      return newTodos;
    });
  };
  const handleToggleSwitch1 = (id: number) => {
    setTodos1(
      todos1.map((todo) =>
        todo.id === id ? { ...todo, switchState: !todo.switchState } : todo
      )
    );
  };

  const handleToggleSwitch2 = (id: number) => {
    setTodos2(
      todos2.map((todo) =>
        todo.id === id ? { ...todo, switchState: !todo.switchState } : todo
      )
    );
  };
  return (
    <Container maxW="container.md">
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Text fontSize="2xl">{pageTitle}</Text>
        <HStack>
          <Text>Edit Mode</Text>
          <Switch
            isChecked={isEditMode}
            onChange={() => setIsEditMode((prev) => !prev)}
          />
        </HStack>
      </Flex>
      <Flex direction={["column", "row"]} gap={4}>
        <VStack spacing={4} width="100%">
          <Text fontSize="xl" fontWeight="bold">
            やること
          </Text>
          <TodoList
            todos={todos1}
            onDeleteTodo={deleteTodo1}
            onMoveTodoUp={moveTodoUp1}
            onMoveTodoDown={moveTodoDown1}
            onToggleSwitch={handleToggleSwitch1}
            isEditMode={isEditMode}
          />
          {isEditMode && <AddTodo onAddTodo={addTodo1} />}
        </VStack>
        <VStack spacing={4} width="100%">
          <Text fontSize="xl" fontWeight="bold">
            もちもの
          </Text>
          <TodoList
            todos={todos2}
            onDeleteTodo={deleteTodo2}
            onMoveTodoUp={moveTodoUp2}
            onMoveTodoDown={moveTodoDown2}
            onToggleSwitch={handleToggleSwitch2}
            isEditMode={isEditMode}
          />
          {isEditMode && <AddTodo onAddTodo={addTodo2} />}
        </VStack>
      </Flex>
    </Container>
  );
};

export default Page;
