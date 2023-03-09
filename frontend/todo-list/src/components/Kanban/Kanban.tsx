import React from 'react';
import { Link } from 'react-router-dom';
import CompleteTodo from './CompleteTodo/CompleteTodo';
import UnCompleteTodo from './unCompleteTodo/UnComplete';
import './style.css';

const Kanban = () => {
  return (
    <>
      <div className="kanbanArea">
        <UnCompleteTodo />
        <CompleteTodo />
      </div>
      <Link to="/">ホーム</Link>
    </>
  );
};

export default Kanban;
