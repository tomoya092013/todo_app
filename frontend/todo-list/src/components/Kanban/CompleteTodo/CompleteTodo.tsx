import React from 'react';

import { TodoListState, TodoType } from '../../../type';

// type Props = {
//   todos: TodoType[];
//   setTodos: Function;
// };

const CompleteTodo = (props: TodoListState) => {
  const { todos, setTodos } = props;
  const completedTodos = todos.filter((todo: TodoType) => todo.isCompleted === true);

  const unCompleteButton = (clickTodo: TodoType) => {
    // console.log(clickTodo);
    // console.log(todos);
    const newUnCompleteTodo = { ...clickTodo, isCompleted: false };
    // console.log(newTodo);
    const newTodos = todos.map((todo: TodoType) => (todo.id === clickTodo.id ? newUnCompleteTodo : todo));
    // console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="completedTodoArea">
        <h3>完了したTodo</h3>
        {completedTodos.map((todo: TodoType) => (
          <div key={todo.id} className="todoList">
            <button onClick={() => unCompleteButton(todo)}>戻る</button>
            {todo.task}
          </div>
        ))}
      </div>
    </>
  );
};

export default CompleteTodo;
