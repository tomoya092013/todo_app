import './style.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { TodoType } from '../../type';

type Props = {
  todos: TodoType[];
};

const DashBoard = (props: Props) => {
  const unCompletedTodos = props.todos.filter((todo) => todo.isCompleted === false);
  const completedTodos = props.todos.filter((todo) => todo.isCompleted === true);

  // console.log(props.todos);
  // console.log(unCompletedTodos);
  // console.log(completedTodos);

  return (
    <>
      <div className="dashBoad">
        <h1 className="title">Todoアプリ2023</h1>
        <div className="currentState">
          <h4>現在の状況</h4>
          <p>未完了のTODO: {unCompletedTodos.length}個</p>
          <p>完了したTODO: {completedTodos.length}個</p>
        </div>
        <div className="linkToKanban">
          <Link to="/kanban">ボード</Link>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
