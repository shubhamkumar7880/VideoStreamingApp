import React, { useEffect } from "react";
import { YOUTUBE_API } from "../Const/YoutubeApi";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../Utils/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videos.videoList);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    dispatch(getAllVideos(json?.items));
  };
  return (
    <div className="flex flex-wrap ml-16">
      {videos.map((video) => (
        <Link
          key={
            video?.kind === "youtube#searchResult"
              ? video?.id?.videoId
              : video?.id
          }
          to={
            "/watch?v=" +
            (video?.kind === "youtube#searchResult"
              ? video?.id?.videoId
              : video?.id)
          }
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
