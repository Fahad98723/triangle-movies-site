import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import AddMovie from "../../Pages/AdminDashboard/AddMovie/AddMovie";
import AllMovie from "../../Pages/AdminDashboard/AllMovie/AllMovie";
import MoviesGenre from "../../Pages/MoviesGenre/MoviesGenre";
import SearchMovies from "../../Pages/SearchMovies/SearchMovies";
import AllMovies from "../../Pages/AllMovies/AllMovies";
import MoviesCategory from "../../Pages/MoviesCategory/MoviesCategory";
import AddSeries from "../../Pages/AdminDashboard/AddSeries/AddSeries";
import AllSeriesList from "../../Pages/AdminDashboard/AllSeriesList/AllSeriesList";
import SingleMovie from "../../Pages/SinglePage/SingleMovie";
import SingleSeries from "../../Pages/SinglePage/SingleSeries";
import AllSeries from "../../Pages/AllSeries/AllSeries";
import React from "react";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "movie/:url",
    element: <SingleMovie />,
  },
  {
    path: "series/:url",
    element: <SingleSeries />,
  },
  {
    path: "movies/",
    element: <AllMovies />,
  },
  {
    path: "series/",
    element: <AllSeries />,
  },
  {
    path: "genre/:genre/",
    element: <MoviesGenre />,
  },
  {
    path: "genre/:genre/page/:pagenumber",
    element: <MoviesGenre />,
  },
  {
    path: "categories/:categories/",
    element: <MoviesCategory />,
  },
  {
    path: "categories/:categories/page/:pagenumber",
    element: <MoviesCategory />,
  },
  {
    path: "movies/search/:search",
    element: <SearchMovies />,
  },
  {
    path: "admin-dashboard/add-movie",
    element: <AddMovie />,
  },
  {
    path: "admin-dashboard/add-series",
    element: <AddSeries />,
  },
  {
    path: "admin-dashboard/all-movie",
    element: <AllMovie />,
  },
  {
    path: "admin-dashboard/all-series",
    element: <AllSeriesList />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
