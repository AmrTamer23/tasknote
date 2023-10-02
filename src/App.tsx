// app.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";
import { LocalStorageProvider } from "./context/LocalStorageContext";
import TasksLayout from "./pages/tasksLayout";
import NotesLayout from "./pages/notesLayout";
import CategoryLayout from "./pages/categoryLayout";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LocalStorageProvider>
              <div className="flex bg-[#121212]">
                <Sidebar />
                <main className="ml-52 px-14 py-5 w-full min-h-screen">
                  <Outlet />
                </main>
              </div>
            </LocalStorageProvider>
          }
        >
          <Route index element={<TasksLayout />} />
          <Route path="notes" element={<NotesLayout />} />
          <Route path="categories/:categoryId" element={<CategoryLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
