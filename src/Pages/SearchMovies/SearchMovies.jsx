import React, { useEffect, useState } from "react";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import { Footer } from "../../Components/Shared/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../Components/Card/Card";
import NoData from "../NoData/NoData";

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

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <NavigationBarPc />
      {movies.length ? (
        <div className=" grid grid-cols-3 md:gap-5 gap-2 md:p-10 px-5 py-10  md:gap-y-10 gap-y-2 max-w-[1450px] mx-auto">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      ) : (
        <>
          <NoData />
          <div className="max-w-[1450px] mx-auto md:p-20 md:pt-0">
            <div className="overflow-hidden  z-0 rounded-full relative p-3">
              <form
                onSubmit={() => console.log("hello")}
                className="relative flex z-50 bg-white rounded-full"
              >
                <input
                  type="text"
                  placeholder="Enter name search here"
                  className="rounded-full flex-1 px-4 py-2 text-gray-700 focus:outline-none"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    navigate(`/movies/search/${search}`);
                  }}
                  type="submit"
                  className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
                >
                  Search
                </button>
              </form>
              <div className="glow glow-1 z-10 bg-red-300 absolute"></div>
              <div className="glow glow-2 z-20 bg-yellow-300 absolute"></div>
              <div className="glow glow-3 z-30 bg-blue-300 absolute"></div>
              <div className="glow glow-4 z-40 bg-[#032541] absolute"></div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default SearchMovies;
