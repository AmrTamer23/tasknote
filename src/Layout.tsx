import React, { useEffect, useState } from 'react';
import logoW from './assets/logoW.png';
import Sidebar from './components/Sidebar';
import TasksLayout from './Layouts/TasksLayout';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { TimeOfDay } from './utilities/timeOfDay';

function Layout() {


  const [timeOfDay, setTimeOfDay] = useState(TimeOfDay());
  useEffect(() => {
    setTimeOfDay(TimeOfDay());
  }, []);

  return (
    <div className="flex bg-[#1E1E1E]">
      <Sidebar />
      <main className='ml-52 px-14 py-5 w-full min-h-screen '>
        <h1 className="font-semibold text-4xl">Good {timeOfDay}!</h1>
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;
