import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import AddCar from "./pages/AddCar";
import Detail from "./pages/detail";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";

// import StudentDetail from "./pages/student/details";

import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Navbar />
        <Home />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <NonProtected>
          <Navbar />
          <Login />
        </NonProtected>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <NonProtected>
        <Navbar />
        <Register />
      </NonProtected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Navbar />
        <Profile />
      </Protected>
    ),
  },
  {
    path: "/cars/:id",
    element: (
      <Protected>
        <Navbar />
        <Detail />
      </Protected>
    ),
  },
  {
    path: "/addCar",
    element: (
      <Protected>
        <Navbar />
        <AddCar />
      </Protected>
    ),
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer theme="colored" />
    </Provider>
  );
}
