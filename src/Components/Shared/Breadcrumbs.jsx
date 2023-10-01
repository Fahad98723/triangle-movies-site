import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Breadcrumbs = ({ routeSegments }) => {
  const navigate = useNavigate();
  return (
    <div className="flex text-white items-center border border-1 rounded p-1 px-2 w-fit">
      <p
        onClick={() => {
          navigate("/");
        }}
        className="flex text-[12px] items-center cursor-pointer"
      >
        <AiOutlineHome className="mr-1" />
        Home
      </p>
      <FaArrowRight className="mx-2" />

      {routeSegments.map((route, i) => (
        <div className="flex items-center">
          <p
            onClick={() => {
              navigate(`/${route}`);
            }}
            className="flex items-center cursor-pointer text-[12px]"
          >
            {route}
          </p>
          {i < routeSegments.length - 1 && <FaArrowRight className="mx-2" />}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
