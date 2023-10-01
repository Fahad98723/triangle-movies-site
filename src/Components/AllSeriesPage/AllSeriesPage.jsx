import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import toast from "react-hot-toast";

const AllSeriesPage = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(
          "https://triangle-movies-backend-1nfyntmhl-fahad98723.vercel.app/api/v1/series/?limit=21"
        )
        .then((res) => {
          setSeries(res.data.data);
        });
    } catch (error) {
      toast.error(error.message);
    }
  }, []);
  return (
    <div>
      <div class=" grid grid-cols-3 md:gap-5 gap-2 md:p-10 px-5 py-10  md:gap-y-10 gap-y-2 max-w-[1450px] mx-auto">
        {series.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllSeriesPage;
