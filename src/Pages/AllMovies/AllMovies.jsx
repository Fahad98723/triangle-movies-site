import React from "react";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import { Footer } from "../../Components/Shared/Footer";
import AllMoviesPage from "../../Components/AllMoviesPage/AllMoviesPage";

const AllMovies = () => {
  return (
    <div>
      <NavigationBarPc />
      <AllMoviesPage />
      <Footer />
    </div>
  );
};

export default AllMovies;
