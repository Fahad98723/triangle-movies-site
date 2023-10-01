import React from "react";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import { Footer } from "../../Components/Shared/Footer";
import SingleMoviePage from "../../Components/SingleMoviePage/SingleMoviePage";

const SingleMovie = () => {
  return (
    <div>
      <NavigationBarPc />
      <SingleMoviePage />
      <Footer />
    </div>
  );
};

export default SingleMovie;
