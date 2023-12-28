import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsConatiner from "./CommentsConatiner";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <div className="px-5 ml-24 w-full">
      <div className="flex">
        <div className="w-full">
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsConatiner />
    </div>
  );
};

export default WatchPage;
