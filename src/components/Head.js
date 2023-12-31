import React, { useEffect, useState } from "react";
import { toggleMenu } from "../Utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SUGGESTION_API } from "../Const/YoutubeApi";
import { cacheResults } from "../Utils/searchSlice";
import { getAllVideos } from "../Utils/videoSlice";
import { handleSearchData } from "../Utils/handleSearch";

const Head = ({ showSuggestions, setShowSuggestions }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const searchResults = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery !== "") {
        if (searchResults?.[searchQuery])
          setSuggestions(searchResults?.[searchQuery]);
        else getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleKeyDown = (e) => {
    if (e?.key === "Enter") {
      handleSearch(searchQuery);
    }
  };

  const handleSearch = async (query) => {
    setShowSuggestions(false);
    if (query === "") return;
    const data = await handleSearchData(query);
    dispatch(getAllVideos(data?.items));
  };

  const getSearchSuggestion = async () => {
    const res = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const data = await res.json();
    setSuggestions(data[1]);
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
          <img
            onClick={toggleMenuHandler}
            className="h-8 mx-2 cursor-pointer"
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            alt="menu"
          />
          <a href="/">
            <img
              className="h-6"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU"
              alt="logo"
            />
          </a>
        </div>
        <div className="col-span-10 px-10">
          <div>
            <input
              type="text"
              className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="search"
              name="hidden"
              onKeyDown={handleKeyDown}
            />
            <button
              className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100"
              onClick={() => handleSearch(searchQuery)}
            >
              🔍
            </button>
          </div>
          {showSuggestions && (
            <div className="absolute bg-white py-2 px-2 w-[28rem] rounded-lg shadow-lg">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    onClick={() => handleSearch(s)}
                    className="py-2 px-3 shadow-sm hover:bg-gray-100"
                    id="suggestion"
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <img
            className="h-8"
            alt="User"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          />
        </div>
      </div>
    </>
  );
};

export default Head;
