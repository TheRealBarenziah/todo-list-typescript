// Todo interface
export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}
/* Simple enough type declaration

The stuff below is a bit more inhabitual, inheritance and stuff going on, for documentation see: 

https://www.typescriptlang.org/docs/handbook/interfaces.html
and
https://brightinventions.pl/blog/5-ways-to-benefit-from-typescript-in-react/

*/

// Todo form interface
export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
}
// Todo list interface
export interface TodoListInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todos: TodoInterface[];
}
// Todo item interface
export interface TodoItemInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: TodoInterface;
}