import React from "react";
import { useDispatch } from "react-redux";
import { getAllVideos } from "../Utils/videoSlice";
import handleSearchData from "../Utils/handleSearch";

const Button = ({ name, activeButton, setActiveButton }) => {
  const dispatch = useDispatch();
  const handleButton = async () => {
    const data = await handleSearchData(name);
    dispatch(getAllVideos(data?.items));
    setActiveButton(name);
  };
  return (
    <div>
      <button
        className={`px-5 py-2 m-2 rounded-lg ${
          activeButton === name ? "bg-black text-white" : "bg-gray-200"
        }`}
        onClick={handleButton}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
