import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navLink = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/login",
      name: "Login",
    },
  ];
  return (
    <nav className="bg-white dark:bg-gray-950 py-5 px-4">
      <div className="w-full max-w-7xl mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-lg font-bold text-gray-900 dark:text-white"
            >
              Logo
            </Link>
          </div>
          <div className="md:flex hidden items-center gap-2">
            {navLink.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-600 hover:text-white px-5 py-3 rounded-md"
                    : "text-gray-500 dark:text-gray-400 hover:text-white px-5 py-3 rounded-md hover:bg-blue-600 dark:hover:text-white"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden absolute top-16 flex flex-col gap-2 ">
            {navLink.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="bg-blue-600 block w-full"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
