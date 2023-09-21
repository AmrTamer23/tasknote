import React from 'react';
import logoW from './assets/logoW.png';
import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex bg-[#1E1E1E]">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
