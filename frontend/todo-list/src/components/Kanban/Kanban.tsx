import './style.css';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { TodoType } from '../../type';
import CompleteTodo from './CompleteTodo/CompleteTodo';
import UnCompleteTodo from './unCompleteTodo/UnComplete';

type Props = {
  todos: TodoType[];
  setTodos: Function;
};
const Kanban = (props: Props) => {
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
