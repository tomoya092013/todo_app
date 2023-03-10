import { Todo } from './type';
import { atom, selector } from 'recoil';

const defaultTodoListState: Todo[] = [
  {
    id: 1,
    task: 'やること1',
    isCompleted: false,
  },
  {
    id: 2,
    task: 'やること2',
    isCompleted: true,
  },
];

export const todoText = atom<string>({
  key: 'todoText',
  default: '',
});

export const todoTextLength = selector<number>({
  key: 'todoTextLength',
  get: ({ get }) => {
    const text = get(todoText);
    return text.length;
  },
});

export const TodoList = atom<Todo[]>({
  key: 'TodoList',
  default: defaultTodoListState,
});

export const unCompleteTodoList = selector<Todo[]>({
  key: 'unCompleteTodoList',
  get: ({ get }) => {
    const newTodoList = get(TodoList);
    const unCompleteTodoList = newTodoList.filter((todo: Todo) => (todo.isCompleted === false ? todo : ''));
    return unCompleteTodoList;
  },
});

export const completeTodoList = selector<Todo[]>({
  key: 'CompleteTodoList',
  get: ({ get }) => {
    const newTodoList = get(TodoList);
    const CompleteTodoList = newTodoList.filter((todo: Todo) => (todo.isCompleted === true ? todo : ''));
    return CompleteTodoList;
  },
});
