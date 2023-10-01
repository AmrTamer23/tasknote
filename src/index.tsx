import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import TasksLayout from "./pages/tasksLayout";
import reportWebVitals from "./reportWebVitals";
import Layout from "./App";
import "./index.css";
import NotesLayout from "./pages/notesLayout";
import CategoryLayout from "./pages/categoryLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TasksLayout />} />
          <Route path="notes" element={<NotesLayout />} />
          <Route path="categories/:categoryId" element={<CategoryLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
