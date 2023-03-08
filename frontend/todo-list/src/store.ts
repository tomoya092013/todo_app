import { atom, selector } from 'recoil';
import { TodoType } from './type';

const defaultTodoList: TodoType[] = [
  {
    id: 1,
    task: 'やること1',
    isCompleted: false,
  },
];

export const textState = atom({
  key: 'textState',
  default: '',
});

export const TodoList = atom<TodoType[]>({
  key: 'TodoList',
  default: defaultTodoList,
});

export const completeTodoList = selector<TodoType[]>({
  key: 'completeTodoList',
  get: ({ get }) => {
    const newTodoList = get(TodoList);
    const completeTodoList = newTodoList.filter((todo) => todo.isCompleted === true);
    return completeTodoList;
  },
});

export const unCompleteTodoList = selector<TodoType[]>({
  key: 'unCompleteTodoList',
  get: ({ get }) => {
    const newTodoList = get(TodoList);
    const unCompleteTodoList = newTodoList.filter((todo) => todo.isCompleted === false);
    return unCompleteTodoList;
  },
});
