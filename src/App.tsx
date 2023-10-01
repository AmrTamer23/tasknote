import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";
import { LocalStorageProvider } from "./context/LocalStorageContext";

function Layout() {
  return (
    <LocalStorageProvider>
      <div className="flex bg-[#121212]">
        <Sidebar />
        <main className="ml-52 px-14 py-5 w-full min-h-screen ">
          <Outlet />
        </main>
      </div>
    </LocalStorageProvider>
  );
}

export default Layout;
