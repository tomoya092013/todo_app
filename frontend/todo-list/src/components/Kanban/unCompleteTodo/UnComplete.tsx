import React from 'react';

import { TodoListState, TodoType } from '../../../type';
import AddText from './AddText';

const UnCompleteTodo = (props: TodoListState) => {
  const { todos, setTodos } = props;
  const unCompleteTodos = todos.filter((todo: TodoType) => todo.isCompleted === false);
  // console.log(todos);
  // console.log(unCompleteTodos);

  const CompleteButton = (clickTodo: TodoType) => {
    console.log(clickTodo);

    const newTodos = todos.map((todo) => {
      //オブジェクトの中の特定プロパティを変えたい時に使う
      return todo.id === clickTodo.id ? { ...clickTodo, isCompleted: true } : todo;
    });

    // const newCompleteTodo = { ...clickTodo, isCompleted: true };
    // // console.log(newCompleteTodo);
    //三項演算子returnなくても値かえす
    // {}だとreturn書かないといけない(1行の時も複数の時も)、1行ならreturnかかなくても良い.()または省略も可能
    // const newTodos = todos.map((todo: TodoType) => (todo.id === clickTodo.id ? newCompleteTodo : todo));
    // console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todoArea">
        <h3>Todo</h3>
        {unCompleteTodos.map((todo: TodoType) => (
          <div key={todo.id} className="todoList">
            <button onClick={() => CompleteButton(todo)}>完了</button>
            {todo.task}
          </div>
        ))}
        <div className="addTextArea">
          <AddText todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
};

export default UnCompleteTodo;
