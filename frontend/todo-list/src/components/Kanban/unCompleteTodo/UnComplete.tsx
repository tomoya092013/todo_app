import React from 'react';
import { TodoType } from '../../../type';
import AddText from './AddText';

const UnCompleteTodo = (props: TodoType) => {
  const { todos, setTodos } = props;
  const unCompleteTodos = todos.filter((todo: TodoType) => todo.isCompleted === false);
  // console.log(todos);
  // console.log(unCompleteTodos);

  const CompleteButton = (clickTodo: TodoType) => {
    // console.log(clickTodo);
    // const newTodos = unCompleteTodos.map((todo) => {
    //   if (todo.id === id) {
    //     todo.isCompleted = true;
    //   }
    // });
    const newCompleteTodo = { ...clickTodo, isCompleted: true };
    // console.log(newCompleteTodo);
    const newTodos = todos.map((todo: TodoType) => (todo.id === clickTodo.id ? newCompleteTodo : todo));
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
