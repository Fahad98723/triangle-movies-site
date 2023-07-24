import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios";
const RecentMoviesSlider = () => {
  const callback = function (index) {
    console.log("callback", index);
  };

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [topMovie, setTopMovie] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=95660f149d395ae5c4c30a131ae18ec9`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  let slides = [
    "https://picsum.photos/800/300/?random",
    "https://picsum.photos/800/301/?random",
    "https://picsum.photos/800/302/?random",
    "https://picsum.photos/800/303/?random",
    "https://picsum.photos/800/304/?random",
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <div className="slider   py-10 max-w-[1450px] mx-auto">
      <Carousel
        breakPoints={breakPoints}
        showArrows={true}
        className="search-header"
        autoPlaySpeed={1500}
        pagination={false}
      >
        {slides.map((item, key) => (
          <div onClick={() => {}} key={key}>
            <img src={item} className={`w-full`} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RecentMoviesSlider;
