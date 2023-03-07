import { log } from 'console';
import React, { useState } from 'react';
import { TodoType } from '../../../type';

const AddText = (props) => {
  const { todos, setTodos } = props;
  const [todoText, setTodoText] = useState('');
  const onChangeTodoText = (e) => {
    // console.log(e.target.value);
    // console.log(e);
    setTodoText(e.target.value);
  };

  const addTodoButton = (todoText: TodoType) => {
    console.log(todoText);
    const addTodo = {
      id: todos.length + 1,
      task: todoText,
      isCompleted: false,
    };
    // console.log(addTodo);
    // console.log(...todos, addTodo);
    // console.log([...todos, addTodo]);
    setTodos([...todos, addTodo]);
    setTodoText('');
  };

  return (
    <div>
      <input value={todoText} onChange={onChangeTodoText} />
      <button onClick={() => addTodoButton(todoText)}>追加</button>
    </div>
  );
};

export default AddText;
