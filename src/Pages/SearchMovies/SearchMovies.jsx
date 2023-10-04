import React, { useEffect, useState } from "react";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import { Footer } from "../../Components/Shared/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../Components/Card/Card";

const SearchMovies = () => {
  const params = useParams();
  console.log(params);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://triangle-movies-backend.vercel.app/api/v1/movies/?searchName=${params.search}&limit=20`
      )
      .then((res) => {
        setMovies(res.data.data);
      });
  }, [params.search]);
  console.log(movies);
  return (
    <div>
      <NavigationBarPc />
      <div class=" grid grid-cols-3 md:gap-5 gap-2 md:p-10 px-5 py-10  md:gap-y-10 gap-y-2 max-w-[1450px] mx-auto">
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SearchMovies;
