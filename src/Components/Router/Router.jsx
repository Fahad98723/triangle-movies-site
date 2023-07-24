import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import SinglePage from "../../Pages/SinglePage/SinglePage";
import AddMovie from "../../Pages/AdminDashboard/AddMovie/AddMovie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "movie/moviename",
    element: <SinglePage />,
  },
  {
    path: "admin-dashboard/add-movie",
    element: <AddMovie />,
  },
]);
