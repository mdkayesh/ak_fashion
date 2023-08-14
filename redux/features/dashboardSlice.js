import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    isSidebarOpen: false,
  },

  reducers: {
    setSidebarOpen: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setSidebarOpen } = dashboardSlice.actions;
export default dashboardSlice.reducer;
