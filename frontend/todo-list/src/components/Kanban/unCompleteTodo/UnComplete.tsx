import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TodoList, unCompleteTodoList } from '../../../store';
import { Todo } from '../../../type';
import AddText from './AddText';

const UnCompleteTodo = () => {
  const unCompleteTodo = useRecoilValue<Todo[]>(unCompleteTodoList);
  const [todoList, setTodoList] = useRecoilState<Todo[]>(TodoList);
  const completeButton = (targetTodo: Todo) => {
    const newTodo: Todo = { ...targetTodo, isCompleted: true };
    const newTodoList: Todo[] = todoList.map((todo) => (todo.id === targetTodo.id ? newTodo : todo));
    setTodoList(newTodoList);
  };
  return (
    <>
      <div className="todoArea">
        <h3>Todo</h3>

        {unCompleteTodo.map((targetTodo: Todo) => (
          <div key={targetTodo.id} className="todoList">
            {targetTodo.task}
            <button onClick={() => completeButton(targetTodo)}>完了</button>
          </div>
        ))}

        <div className="addTextArea">
          <AddText />
        </div>
      </div>
    </>
  );
};

export default UnCompleteTodo;
