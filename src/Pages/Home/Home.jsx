import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import RecentMoviesSlider from "../../Components/Slider/RecentMoviesSlider";
import { Footer } from "../../Components/Shared/Footer";
import SingleMoviePage from "../../Components/SingleMoviePage/SingleMoviePage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card/Card";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://triangle-movies-backend.vercel.app/api/v1/movies/?limit=21&sortBy=release_date&sortOrder=desc"
      )
      .then((res) => {
        setMovies(res.data.data);
        // console.log(res.data.data);
      });
  }, []);

  const [movies2, setMovies2] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://triangle-movies-backend.vercel.app/api/v1/movies/?limit=21&page=2&sortBy=release_date&sortOrder=desc"
      )
      .then((res) => {
        setMovies2(res.data.data);
        // console.log(res.data.data);
      });
  }, []);

  const [series, setSeries] = useState([]);
  useEffect(() => {
    axios
      .get("https://triangle-movies-backend.vercel.app/api/v1/series/?limit=21")
      .then((res) => {
        setSeries(res.data.data);
        // console.log(res.data.data);
      });
  }, []);

  const navigate = useNavigate();

  const [recentMovies, setRecentMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://triangle-movies-backend.vercel.app/api/v1/movies/?limit=10")
      .then((res) => {
        setRecentMovies(res.data.data);
        // console.log(res.data.data);
      });
  }, []);

  return (
    <div className=" ">
      <NavigationBarPc></NavigationBarPc>
      <Banner></Banner>
      <RecentMoviesSlider recentMovies={recentMovies}></RecentMoviesSlider>

      <div class=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 md:gap-5 gap-2 md:p-10 px-5 py-10  md:gap-y-10 gap-y-2 max-w-[1450px] mx-auto">
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
        {movies2.map((movie) => (
          <Card movie={movie} />
        ))}
        {/* {series.map((movie) => (
          <Card movie={movie} />
        ))} */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
