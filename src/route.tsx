import { createBrowserRouter } from "react-router-dom";
import WithNav from "@/layout/WithNav";
import WithoutNav from "@/layout/WithoutNav";
import WithSidebar from "@/layout/WithSidebar";

// with nav pages
import Home from "@/components/Home/Home.tsx";
import About from "@/components/About/About.tsx";
import Contact from "@/components/Contact/Contact.tsx";

// single page
import Login from "./components/Login/Login.tsx";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword.tsx";
import ResetPassword from "./components/ResetPassword/ResetPassword.tsx";

// with sidebar pages
import Dashboard from "./components/Dashboard/Dashboard.tsx";

import Profile from "./components/Profile/Profile.tsx";

import Employees from "./components/Employees/Employees.tsx";
import AddEmployee from "./components/AddEmployee/AddEmployee.tsx";
import EditEmployee from "./components/EditEmployee/EditEmployee.tsx";

import AddProject from "./components/AddProject/AddProject.tsx";
import Projects from "./components/Projects/Projects.tsx";
import EditProject from "./components/EditProject/EditProject.tsx";

import Departments from "./components/Departments/Departments.tsx";
import AddDepartment from "./components/AddDepartment/AddDepartment.tsx";
import EditDepartment from "./components/EditDepartment/EditDepartment.tsx";

import AddSalary from "./components/AddSalary/AddSalary.tsx";
import EditSalary from "./components/EditSalary/EditSalary.tsx";

// error pages
import Error404 from "./components/Error404/Error404.tsx";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <WithNav />,
    children: [
      { path: "", element: <Home /> }, // Home page
      { path: "about", element: <About /> }, // About page
      { path: "contact", element: <Contact /> }, // Contact page
    ],
  },
  {
    path: "/",
    element: <WithoutNav />,
    children: [
      { path: "login", element: <Login /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },
  {
    path: "dashboard",
    element: <WithSidebar />,
    children: [
      { path: "", element: <Dashboard /> }, // Dashboard page
    ],
  },
  {
    path: "profile",
    element: <WithSidebar />,
    children: [
      { path: "", element: <Profile /> }, // Profile page
    ],
  },
  {
    path: "employees",
    element: <WithSidebar />,
    children: [
      { path: "", element: <Employees /> }, // Employees page
    ],
  },
  {
    path: "add-employee",
    element: <WithSidebar />,
    children: [
      { path: "", element: <AddEmployee /> }, // Add employee page
    ],
  },
  {
    path: "edit-employee",
    element: <WithSidebar />,
    children: [
      { path: "", element: <EditEmployee /> }, // Edit employee page
    ],
  },
  {
    path: "projects",
    element: <WithSidebar />,
    children: [
      { path: "", element: <Projects /> }, // Projects page
    ],
  },
  {
    path: "add-project",
    element: <WithSidebar />,
    children: [
      { path: "", element: <AddProject /> }, // Add project page
    ],
  },
  {
    path: "edit-project",
    element: <WithSidebar />,
    children: [
      { path: "", element: <EditProject /> }, // Edit project page
    ],
  },
  {
    path: "departments",
    element: <WithSidebar />,
    children: [
      { path: "", element: <Departments /> }, // Departments page
    ],
  },
  {
    path: "add-department",
    element: <WithSidebar />,
    children: [
      { path: "", element: <AddDepartment /> }, // Add department page
    ],
  },
  {
    path: "edit-department",
    element: <WithSidebar />,
    children: [
      { path: "", element: <EditDepartment /> }, // Edit department page
    ],
  },
  {
    path: "add-salary",
    element: <WithSidebar />,
    children: [
      { path: "", element: <AddSalary /> }, // Salary page
    ],
  },
  {
    path: "edit-salary",
    element: <WithSidebar />,
    children: [
      { path: "", element: <EditSalary /> }, // Edit salary page
    ],
  },

  {
    path: "*",
    element: <WithoutNav />,
    children: [{ path: "", element: <Error404 /> }],
  },
]);
