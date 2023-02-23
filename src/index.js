import ReactDOM from "react-dom/client";
import { createBrowserRouter,createHashRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./components/ErrorPage";

import App from "./App";
import { Home, About, Portfolio, Service, Contact } from "./pages"
import "./index.css";
import { ContextProvider } from "./context/Context"

const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/service",
                element: <Service />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    },
])

root.render(
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider >
)
