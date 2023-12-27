import {
  GOOGLE_API_KEY,
  YOUTUBE_API,
  YOUTUBE_SEARCH_API,
} from "../Const/YoutubeApi";

export const handleSearchData = async (query) => {
  const API =
    query === "All"
      ? YOUTUBE_API
      : YOUTUBE_SEARCH_API + query + "&" + "surfing&key=" + GOOGLE_API_KEY;
  const res = await fetch(API);
  const data = await res.json();

  return data;
};

export default handleSearchData;
