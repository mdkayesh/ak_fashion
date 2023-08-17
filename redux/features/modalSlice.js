import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isProducModalOpen: false,
    isUserModal: false,
    isModal: false,
    activeView: "grid",
    currentProduct: {},
    isUpdateModal: false,
  },
  reducers: {
    // reducer functions

    setProductModal: (state) => {
      state.isProducModalOpen = !state.isProducModalOpen;
      if (state.isProducModalOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
    setUserModal: (state) => {
      state.isUserModal = !state.isUserModal;
    },
    setUpdateModal: (state) => {
      state.isUpdateModal = !state.isUpdateModal;
    },
    setView: (state, { payload }) => {
      state.activeView = payload;
    },
    setCurrProduct: (state, { payload }) => {
      state.currentProduct = payload;
    },
  },
});

export const {
  setProductModal,
  setUserModal,
  setView,
  setUpdateModal,
  setCurrProduct,
} = modalSlice.actions;
export default modalSlice.reducer;
