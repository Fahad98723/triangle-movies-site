import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import SinglePage from "../../Pages/SinglePage/SinglePage";
import AddMovie from "../../Pages/AdminDashboard/AddMovie/AddMovie";
import AllMovie from "../../Pages/AdminDashboard/AllMovie/AllMovie";
import MoviesGenre from "../../Pages/MoviesGenre/MoviesGenre";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "movie/:id",
    element: <SinglePage />,
  },
  {
    path: "movies/genre/:genre/",
    element: <MoviesGenre />,
  },
  {
    path: "movies/genre/:genre/page/:pagenumber",
    element: <MoviesGenre />,
  },
  {
    path: "admin-dashboard/add-movie",
    element: <AddMovie />,
  },
  {
    path: "admin-dashboard/all-movie",
    element: <AllMovie />,
  },
]);
