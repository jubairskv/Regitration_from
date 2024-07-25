import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Login from "./Login ";
import Registration from "./Registration";

const Home = () => {
  const userName = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    { path: "/register", element: <Registration /> },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <div>
      <h3>{userName.name}</h3>
      <button onClick={handleLogout} type="submit">
        Logout
      </button>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Home;
