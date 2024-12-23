import { Outlet } from "react-router-dom";

const WithoutNav = () => {
  return (
    <main className="bg-white dark:bg-black">
      <Outlet />
    </main>
  );
};

export default WithoutNav;
