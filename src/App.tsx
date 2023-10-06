import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";
import { LocalStorageProvider } from "./context/LocalStorageContext";
import TasksLayout from "./pages/tasksLayout";
import NotesLayout from "./pages/notesLayout";
import CategoryLayout from "./pages/categoryLayout";
import { RxHamburgerMenu } from "react-icons/rx";
import "./index.css";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LocalStorageProvider>
              <div className="flex bg-[#0E0F0F]">
                <span className="block lg:hidden">
                  {isSidebarOpen && (
                    <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
                  )}
                </span>
                <span className="hidden lg:block">
                  <Sidebar />
                </span>

                <main
                  className="lg:ml-52 md:px-14 px-5 py-5 w-full min-h-screen flex flex-col"
                  onClick={() => {
                    if (isSidebarOpen) setIsSidebarOpen(false);
                  }}
                >
                  <span className="flex gap-10 mb-7 lg:hidden">
                    {isSidebarOpen ? (
                      <h1
                        className="text-2xl font-semibold text-white"
                        onClick={handleSidebar}
                      >
                        X
                      </h1>
                    ) : (
                      <RxHamburgerMenu
                        size={30}
                        color="white"
                        onClick={handleSidebar}
                      />
                    )}
                  </span>
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
