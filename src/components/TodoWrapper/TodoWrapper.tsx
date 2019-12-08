// Import dependencies
import * as React from "react";
// Import components
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
// Import interfaces
import { TodoInterface } from "../../interfaces";

const TodoWrapper = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);
  /*
  "...For TypeScript, make sure to use the TodoInterface interface along with []. 
  This will tell TypeScript you are “talking” about an array of todos objects, 
  not just one todo object.""
  */
  function handleTodoCreate(todo: TodoInterface) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos];
    // Update new todos state
    newTodosState.push(todo);
    // Update todos state
    setTodos(newTodosState);
  }

  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos];
    // Find correct todo item to update
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value;
    // Update todos state
    setTodos(newTodosState);
  }

  // Remove existing todo item
  function handleTodoRemove(id: string) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id);
    // Update todos state
    setTodos(newTodosState);
  }

  function handleTodoComplete(id: string) {
    // Copy current todos state
    const newTodosState: TodoInterface[] = [...todos];
    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted;
    // Update todos state
    setTodos(newTodosState);
  }

  // Check if todo item has title
  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add("todo-input-error");
    } else {
      event.target.classList.remove("todo-input-error");
    }
  }
  return (
    <div className="todo-wrapper">
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />
      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlur}
      />
    </div>
  );
};

export default TodoWrapper;