import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex">
      {isMenuOpen && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Body;
