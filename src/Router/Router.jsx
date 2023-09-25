import { createBrowserRouter, useParams } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donation from "../Pages/Donation/Donation";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

  const myCreatedRoute = createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout> ,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
                loader : ()=> fetch('/donation_campaign_data.json')
            },
            {
                path : "/donation",
                element: <Donation></Donation>,
                loader : ()=> fetch('/donation_campaign_data.json')
            },
            {
                path: "/:donation_details",
                loader: () => fetch('/donation_campaign_data.json'),
                element: <DonationDetails></DonationDetails>,
            }
        ]

    }
  ]);



export default myCreatedRoute;