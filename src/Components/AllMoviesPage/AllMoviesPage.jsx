import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import toast from "react-hot-toast";

const AllMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(
          "https://triangle-movies-backend-1nfyntmhl-fahad98723.vercel.app/api/v1/movies/?limit=21"
        )
        .then((res) => {
          setMovies(res.data.data);
        });
    } catch (error) {
      toast.error(error.message);
    }
  }, []);
  return (
    <div>
      <div class=" grid grid-cols-3 md:gap-5 gap-2 md:p-10 px-5 py-10  md:gap-y-10 gap-y-2 max-w-[1450px] mx-auto">
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllMoviesPage;
