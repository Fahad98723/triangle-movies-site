import React from "react";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import { Footer } from "../../Components/Shared/Footer";
import MoviesGenrePage from "../../Components/MoviesPage/MoviesGenrePage";

const MoviesGenre = () => {
  return (
    <div>
      <NavigationBarPc />
      <MoviesGenrePage />
      <Footer />
    </div>
  );
};

export default MoviesGenre;
