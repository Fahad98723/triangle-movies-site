import React from "react";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import { Footer } from "../../Components/Shared/Footer";
import MoviesPage from "../../Components/MoviesPage/MoviesPage";

const MoviesGenre = () => {
  return (
    <div>
      <NavigationBarPc />
      <MoviesPage />
      <Footer />
    </div>
  );
};

export default MoviesGenre;
