import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Delivery from "./Pages/Delivery.jsx";
import Dyeing from "./Pages/Dyeing.jsx";
import Invoice from "./Pages/Invoice.jsx";
import Account from "./Pages/Account.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path:"delivery",
        element:<Delivery/>
      },
      {
        path:"dyeing",
        element:<Dyeing/>
      },
      {
        path:"invoice",
        element:<Invoice/>
      },
      {
        path:"account",
        element:<Account/>,
        children: [
          {
            path:"login",
            element:<Login/>
          },
          {
            path:'register',
            element:<Register/>
          }
        ]
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
