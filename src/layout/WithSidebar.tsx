import Sidebar from "../components/Sidebar/Sidebar.tsx";
import { Outlet } from "react-router-dom";
const WithSidebar = () => {
  return (
    <main className="flex flex-col md:flex-row w-full min-h-screen h-full bg-white dark:bg-black">
      <Sidebar />

      <div className="w-full h-full p-4">
        <Outlet />
      </div>
    </main>
  );
};

export default WithSidebar;
