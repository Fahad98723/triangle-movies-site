import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";

const AutoComplete = ({
  options,
  placeholder,
  setSelectData,
  className,
  selectedData,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(selectedData || null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setSelectedOption(selectedData);
  }, [selectedData]);

  const handleKeyDown = (event) => {
    if (!options?.length) {
      if (event.key === "Enter") {
        // Handle Enter key press here

        let data = [];
        data.push(event.target.value);
        setSuggestions(data);
      }
    }
  };

  const handleInputChange = (e, boolean) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredOptions = value.length
      ? options
          ?.filter((item) => !selectedOption?.includes(item))
          .filter((option) =>
            option.toLowerCase().includes(value.toLowerCase())
          )
      : options?.filter((item) => !selectedOption?.includes(item));

    setSuggestions(filteredOptions);

    setTimeout(() => {
      setShow(boolean);
    }, 200);
    // setSelectedOption(null);
  };

  const handleSelectOption = (option) => {
    if (selectedOption) {
      setSelectedOption([...selectedOption, option]);
      setSelectData([...selectedOption, option]);
    } else {
      setSelectedOption([option]);
      setSelectData([option]);
    }
    setInputValue("");
    setShow(false);
  };

  const removSelectedOptions = (select) => {
    const result = selectedOption.filter((s) => s !== select);
    setSelectedOption(result);
    setSelectData(result);
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e, true);
        }}
        onFocus={(e) => {
          handleInputChange(e, true);
        }}
        onBlur={(e) => {
          e.preventDefault();
          if (options) {
            handleInputChange(e, false);
          }
        }}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`border border-2 mb-2 p-2 ${className}`}
      />
      {suggestions?.length > 0 && show ? (
        <ul className=" border border-gray-300 max-h-[300px] overflow-y-scroll rounded-lg shadow-lg">
          {suggestions?.map((option, index) => (
            <li
              key={index}
              onClick={(e) => {
                handleSelectOption(option);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}

      {selectedOption && (
        <div className="flex flex-wrap">
          {selectedOption.map((selected) => {
            return (
              <div className="flex m-2 ml-0  text-gray-600 p-2 bg-gray-200 rounded items-center">
                <p className="">{selected}</p>
                <GiCancel
                  onClick={() => {
                    removSelectedOptions(selected);
                  }}
                  className="ml-1 cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
