import React from "react";
import image from "../../assets/nodata.png";
const NoData = () => {
  return (
    <div>
      <div className="py-5">
        <img src={image} className="mx-auto" alt="" />
        <div className="text-center mb-5">
          <p className="text-3xl font-semibold my-5 text-white">
            {" "}
            NO Data Found
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoData;
