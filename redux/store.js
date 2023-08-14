import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/modalSlice";
import authSlice from "./features/authSlice";
import dashboardSlice from "./features/dashboardSlice";
import filterSlice from "./features/filterSlice";
import addToCartSlice from "./features/addToCartSlice";

const store = configureStore({
  reducer: {
    //reducers
    authSlice: authSlice,
    modalSlice: modalSlice,
    dashboardSlice: dashboardSlice,
    filterSlice: filterSlice,
    addToCartSlice: addToCartSlice,
  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   });
  // },
});

export default store;
