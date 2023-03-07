import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CompleteTodo from './CompleteTodo/CompleteTodo';
import UnCompleteTodo from './unCompleteTodo/UnComplete';
import './style.css';
import { TodoType } from '../../type';

const Kanban = (props: TodoType) => {
  const { todos, setTodos } = props;
  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);

  return (
    <>
      <div className="kanbanArea">
        <UnCompleteTodo todos={todos} setTodos={setTodos} />
        <CompleteTodo todos={todos} setTodos={setTodos} />
      </div>
      <Link to="/">ホーム</Link>
    </>
  );
};

export default Kanban;
