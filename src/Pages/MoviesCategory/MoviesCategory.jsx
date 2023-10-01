import React from "react";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import { Footer } from "../../Components/Shared/Footer";
import MoviesCategoryPage from "../../Components/MoviesPage/MoviesCategoryPage";

const MoviesCategory = () => {
  return (
    <div>
      <NavigationBarPc />
      <MoviesCategoryPage />
      <Footer />
    </div>
  );
};

export default MoviesCategory;
