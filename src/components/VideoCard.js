import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`p-2 m-2 shadow-lg rounded-lg ${
        isMenuOpen ? "mr-8 w-80" : "w-72"
      }`}
    >
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        {statistics && (
          <li>
            {Math.round(statistics?.viewCount / 1000) > 999
              ? Math.round(statistics?.viewCount / 1000000) + "M"
              : Math.round(statistics?.viewCount / 1000) + "K"}{" "}
            views
          </li>
        )}
      </ul>
    </div>
  );
};

export default VideoCard;
