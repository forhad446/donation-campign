import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

  const myCreatedRoute = createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout> ,
        // errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
                // loader : ()=> fetch('/phones.json')
            }
        ]

    }
  ]);



export default myCreatedRoute;