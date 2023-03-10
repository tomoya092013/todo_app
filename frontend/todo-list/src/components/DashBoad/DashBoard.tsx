import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { completeTodoList, unCompleteTodoList } from '../../store';
import './style.css';

const DashBoard = () => {
  const unCompleteTodosCount = useRecoilValue(unCompleteTodoList);
  const completeTodosCount = useRecoilValue(completeTodoList);

  return (
    <>
      <div className="dashBoad">
        <h1 className="title">Todoアプリ2023</h1>
        <div className="currentState">
          <h4>現在の状況</h4>
          <p>未完了のTODO: {unCompleteTodosCount.length}個</p>
          <p>完了したTODO: {completeTodosCount.length}個</p>
        </div>
        <div className="linkToKanban">
          <Link to="/kanban">ボード</Link>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
