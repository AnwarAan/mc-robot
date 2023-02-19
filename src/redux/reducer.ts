import { createSlice } from "@reduxjs/toolkit";

const robotsSlice = createSlice({
  name: "Robots State",
  initialState: {
    isPending: false,
    robots: [],
    error: "",
    searchField: "",
  },

  reducers: {
    getRobotPendingReducer: (state, action) => {
      state.isPending = action.payload;
    },
    getRobotSuccessReducer: (state, action) => {
      state.robots = action.payload;
      state.isPending = false;
    },
    getRobotFailReducer: (state, action) => {
      state.robots = action.payload;
      state.isPending = false;
    },
    searchRobotdReducer: (state, action) => {
      state.searchField = action.payload;
    },
  },
});

export const { getRobotPendingReducer } = robotsSlice.actions;
export const { getRobotSuccessReducer } = robotsSlice.actions;
export const { getRobotFailReducer } = robotsSlice.actions;
export const { searchRobotdReducer } = robotsSlice.actions;
export default robotsSlice.reducer;
