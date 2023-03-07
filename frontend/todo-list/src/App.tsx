import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoad/DashBoard';
import Kanban from './components/Kanban/Kanban';
import { TodoType } from './type';

function App() {
  const initialState: TodoType[] = [
    {
      id: 1,
      task: 'やること1',
      isCompleted: false,
    },
    {
      id: 2,
      task: 'やること2',
      isCompleted: false,
    },
    {
      id: 3,
      task: 'やること3',
      isCompleted: true,
    },
  ];
  const [todos, setTodos] = useState<TodoType[]>(initialState);

  return (
    <div className="baseDiv">
      <div className="app">
        <Routes>
          <Route path="/" element={<DashBoard todos={todos} />} />
          <Route path="/kanban" element={<Kanban todos={todos} setTodos={setTodos} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
