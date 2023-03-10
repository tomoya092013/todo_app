import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { completeTodoList, TodoList } from '../../../store';
import { Todo } from '../../../type';

const CompleteTodo = () => {
  const cmpleteTodoList = useRecoilValue(completeTodoList);
  const [todoList, setTodoList] = useRecoilState(TodoList);
  const unCompleteButton = (targetTodo: Todo) => {
    const newTodo = { ...targetTodo, isCompleted: false };
    const newTodoList: Todo[] = todoList.map((todo) => (todo.id === targetTodo.id ? newTodo : todo));
    setTodoList(newTodoList);
  };
  return (
    <>
      <div className="completedTodoArea">
        <h3>完了したTodo</h3>

        {cmpleteTodoList.map((todo: Todo) => (
          <div key={todo.id} className="todoList">
            {todo.task}
            <button onClick={() => unCompleteButton(todo)}>戻す</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompleteTodo;
