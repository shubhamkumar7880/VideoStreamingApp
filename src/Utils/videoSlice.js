import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: { videoList: [] },
  reducers: {
    getAllVideos: (state, action) => {
      state.videoList = [...action.payload];
    },
  },
});

export const { getAllVideos } = videoSlice.actions;
export default videoSlice.reducer;
