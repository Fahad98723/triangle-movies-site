import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { generatedUrlToText } from "../utils/utils";
import Card from "../Card/Card";

const MoviesCategoryPage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  console.log(generatedUrlToText(params.categories));
  useEffect(() => {
    axios
      .get(
        `https://triangle-movies-backend.vercel.app/api/v1/movies/?categories=${generatedUrlToText(
          params.categories
        )}&limit=20`
      )
      .then((res) => {
        setMovies(res.data.data);
        console.log(res.data);
      });
  }, [params.categories]);

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

export default MoviesCategoryPage;
