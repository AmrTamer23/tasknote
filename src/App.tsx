import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex bg-[#121212]">
      <Sidebar />
      <main className="ml-52 px-14 py-5 w-full min-h-screen ">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
