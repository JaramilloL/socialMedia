//aqui se implementaran las ruras de cadat una de las paginas de login, register, chat y mas
import { createBrowserRouter } from "react-router-dom";
import Index from "../layout/Index";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import Error from "../components/errors/Error";
import ChatPage from "../pages/ChatPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/chat",
        element: <ChatPage/>
      },
    ],
  },
]);
