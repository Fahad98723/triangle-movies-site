import React from "react";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import { Footer } from "../../Components/Shared/Footer";
import AllSeriesPage from "../../Components/AllSeriesPage/AllSeriesPage";

const AllSeries = () => {
  return (
    <div>
      <NavigationBarPc />
      <AllSeriesPage />
      <Footer />
    </div>
  );
};

export default AllSeries;
