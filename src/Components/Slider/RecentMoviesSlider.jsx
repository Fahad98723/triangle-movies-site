import React from "react";
import Carousel from "react-elastic-carousel";
import useScreenWidth from "../utils/useScreenWidth";
import { useNavigate } from "react-router-dom";

const RecentMoviesSlider = ({ recentMovies }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
  ];

  const { screenWidth } = useScreenWidth();
  const navigate = useNavigate();

  console.log(recentMovies);
  return (
    <div className="slider    max-w-[1450px] mx-auto">
      <Carousel
        breakPoints={breakPoints}
        showArrows={screenWidth > 768 ? true : false}
        className="search-header bg-gray-800 px-2 py-10"
        autoPlaySpeed={1500}
        pagination={false}
      >
        {recentMovies.map((item, key) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate(`/movie/${item?.url}`);
            }}
            key={key}
          >
            <img
              src={item.poster}
              className={`md:w-[300px] md:h-[280px] h-[180px] cursor-pointer hover:scale-125`}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RecentMoviesSlider;
