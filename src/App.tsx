import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";
import { TimeOfDay } from "./utils/helpers";

function Layout() {
  const [timeOfDay, setTimeOfDay] = useState(TimeOfDay());
  useEffect(() => {
    setTimeOfDay(TimeOfDay());
  }, []);

  return (
    <div className="flex bg-[#121212]">
      <Sidebar />
      <main className="ml-52 px-14 py-5 w-full min-h-screen ">
        <h1 className="font-semibold text-4xl">Good {timeOfDay}!</h1>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
