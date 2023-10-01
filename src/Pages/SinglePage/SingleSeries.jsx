import React from "react";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import { Footer } from "../../Components/Shared/Footer";
import SingleSeriesPage from "../../Components/SingleSeriesPage/SingleSeriesPage";

const SingleSeries = () => {
  return (
    <div>
      <NavigationBarPc />
      <SingleSeriesPage />
      <Footer />
    </div>
  );
};

export default SingleSeries;
