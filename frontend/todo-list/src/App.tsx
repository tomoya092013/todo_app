import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoad/DashBoard';
import Kanban from './components/Kanban/Kanban';

function App() {
  return (
    <div className="baseDiv">
      <div className="app">
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/kanban" element={<Kanban />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
