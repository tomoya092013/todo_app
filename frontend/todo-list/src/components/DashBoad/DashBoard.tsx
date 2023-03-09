import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const DashBoard = () => {
  return (
    <>
      <div className="dashBoad">
        <h1 className="title">Todoアプリ2023</h1>
        <div className="currentState">
          <h4>現在の状況</h4>
          <p>未完了のTODO: 個</p>
          <p>完了したTODO: 個</p>
        </div>
        <div className="linkToKanban">
          <Link to="/kanban">ボード</Link>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
