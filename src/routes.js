import React from "react";
import { Navigate } from "react-router-dom";
import SignIn from "./Screens/Auth/SignIn";
import DashboardLayout from "./Layout/DashboardLayout";
import MainLayout from "./Layout/MainLayout";
import Dashboard from "./Screens/App/DashBoard/Dashboard";
import UserList from "./Screens/App/Member/User";
const routes = () => [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "user", element: <UserList /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <SignIn /> },
      // { path: 'register', element: <RegisterView /> },
      // { path: '404', element: <NotFoundView /> },
      { path: "/", element: <Navigate to="/login" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
