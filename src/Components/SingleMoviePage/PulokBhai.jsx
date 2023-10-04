import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const filterData = [
  { name: "House", value: "House" },
  { name: "Garden", value: "Garden" },
  { name: "Pool", value: "Pool" },
];

const PulokBhai = () => {
  const [filterDataShow, setFilterDataShow] = useState(false);
  const [filters, setFilters] = useState([]);
  const [buyShow, setBuyShow] = useState(true);
  const [rentShow, setRentShow] = useState(false);

  const handleRemove = (data) => {
    setFilters(filters.filter((filter) => filter !== data));
  };

  const handleFilter = (data) => {
    if (filters.includes(data)) {
      return;
    } else {
      setFilters([...filters, data]);
    }
  };

  return (
    <div className="min-h-[500px] ">
      <div className="flex gap-2">
        <div
          onClick={() => {
            setBuyShow(true);
            setRentShow(false);
          }}
          className={`${
            buyShow ? "bg-white" : "bg-gray-400 text-white"
          } px-3 py-2 rounded-t cursor-pointer`}
        >
          <p>Buy</p>
        </div>
        <div
          onClick={() => {
            setBuyShow(false);
            setRentShow(true);
          }}
          className={`${
            rentShow ? "bg-white" : "bg-gray-400 text-white"
          } px-3 py-2 rounded-t cursor-pointer`}
        >
          <p>Rent</p>
        </div>
      </div>
      <div className="p-5 bg-white ">
        {buyShow ? (
          <div>
            <div className="my-2 flex gap-2">
              {filters.map((filter) => (
                <div
                  onClick={() => {
                    handleRemove(filter);
                  }}
                  className="border-2 rounded flex items-center px-2 py-1 text-gray-400 cursor-pointer"
                >
                  <p className="">{filter}</p>
                  <RxCross2 className="ml-1 " />
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <div className="flex search bg-gray-200 border-2 px-3 py-1 items-center rounded">
                <BsSearch className="text-gray-400 mr-1 " />
                <input
                  className="border-none outline-none bg-gray-200"
                  type="text"
                  placeholder="Search Street City, Provience, RP number"
                />
              </div>
              <div className="flex search bg-gray-200 border-2 px-3 py-1 items-center rounded">
                <GrLocation className="text-gray-400 mr-1 " />
                <input
                  className="border-none outline-none bg-gray-200"
                  type="text"
                  placeholder="Enter business location"
                />
              </div>
              <div className="flex search bg-gray-200 border-2 px-3 py-1 items-center rounded">
                <MdOutlineDateRange className="text-gray-400 mr-1 " />
                <input
                  className="border-none outline-none bg-gray-200"
                  type="text"
                  placeholder="Date oldest to newest"
                />
              </div>
              <div className="relative">
                <div
                  onClick={() => {
                    setFilterDataShow(!filterDataShow);
                  }}
                  className="flex search bg-gray-900 text-white border-2 px-3 py-1 items-center rounded cursor-pointer "
                >
                  <p>Filter</p>
                </div>

                {filterDataShow ? (
                  <>
                    {/* <div className="arrow  absolute h-[20px]  w-[20px] bg-black rotate-45" id="arrow"/> */}
                    <div className="absolute left-0 z-10 mt-5 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div
                        className="py-2 divide-y divide-gray/20 max-h-[400px] overflow-y-scroll"
                        role="none"
                      >
                        {filterData?.map((element, idx) => {
                          return (
                            <div
                              key={idx}
                              className={`flex ${
                                filters.includes(element.value)
                                  ? "text-primary"
                                  : "text-[#000000]"
                              }   justify-between cursor-pointer  items-center`}
                              onClick={() => {
                                handleFilter(element.value);
                                setFilterDataShow(false);
                              }}
                            >
                              <p className={`  text-[14px]  px-4 py-2 `}>
                                {element.name}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {rentShow ? <p>This is rent show</p> : ""}
      </div>
    </div>
  );
};

export default PulokBhai;
