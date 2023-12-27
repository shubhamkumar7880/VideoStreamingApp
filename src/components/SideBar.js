import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  console.log("params", location);
  return (
    <div className="p-5 shadow-lg w-60">
      <ul>
        <Link to="/">
          <li
            className={`${
              location?.pathname === "/" && "bg-gray-200 p-2 rounded-lg"
            }`}
          >
            Home
          </li>
        </Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gmaing</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gmaing</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
