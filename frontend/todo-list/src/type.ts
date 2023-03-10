// TODOの型を定義する
export type TodoType = {
  id: number;
  task: string;
  isCompleted: boolean;
};

export type TodoListState = {
  todos: TodoType[];
  setTodos: Function;
};
