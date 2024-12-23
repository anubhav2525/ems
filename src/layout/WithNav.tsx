import Footer from "../components/Footer/Footer.tsx";
import Navbar from "@/components/Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom";

const WithNav = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-[83vh] w-full p-4 bg-white dark:bg-black">
        <div className=" max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default WithNav;
