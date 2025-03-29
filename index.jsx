import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx"
import CountryDetail from "./components/CountryDetail";
import Home from "./components/Home";
import Error from "./components/Error.jsx"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error />,
      children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path: "/:country",
            element : <CountryDetail/>
        }
      ]
    },
]);

const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={router} />)




