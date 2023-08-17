"use client";

import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    _amount: 1,
    isCartModalOpen: false,
    cartProducts:
      typeof window !== "undefined"
        ? JSON.parse(localStorage?.getItem("cartProducts")) || []
        : [],
    currentProductID: "",
    wishList:
      typeof window !== "undefined"
        ? JSON.parse(localStorage?.getItem("wishList")) || []
        : [],
  },

  // reducers
  reducers: {
    handleAmount: (state, { payload }) => {
      const { direction, stock } = payload;

      if (direction === "increament") {
        if (stock === state._amount) return;
        state._amount++;
      } else {
        if (state._amount === 1) return;
        state._amount--;
      }
    },

    handleCartAmount: (state, { payload }) => {
      const { direction, stock, id } = payload;

      const selectedProduct = state.cartProducts.find((p) => p.id === id);

      if (selectedProduct) {
        if (direction === "increament") {
          if (stock === selectedProduct.amount) return;
          selectedProduct.amount++;
        } else {
          if (selectedProduct.amount === 1) return;
          selectedProduct.amount--;
        }
      }
    },

    resetAmount: (state) => {
      state._amount = 1;
    },

    handleAddCart: (state, { payload }) => {
      state.isCartModalOpen = true;

      const existingProduct = state.cartProducts.find(
        (p) => p.id === payload.id
      );

      if (existingProduct) {
        existingProduct.amount += payload.amount;
        existingProduct.color = payload.color;
        existingProduct.composition = payload.composition;
        existingProduct.property = payload.property;
      } else {
        state.cartProducts = [...state.cartProducts, payload];
      }
      state.currentProductID = payload.id;
      state._amount = 1;
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },

    handleRemoveCart: (state, { payload }) => {
      const updatedProducts = state.cartProducts.filter(
        (p) => p.id !== payload
      );

      state.cartProducts = updatedProducts;
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },

    closeCartModal: (state) => {
      state.isCartModalOpen = !state.isCartModalOpen;
    },

    handleAddToWish: (state, { payload }) => {
      const existingProduct = state.wishList.find((p) => p.id === payload.id);

      if (existingProduct) {
        const updatedWish = state.wishList.filter((w) => w.id !== payload.id);

        state.wishList = updatedWish;
        localStorage.setItem("wishList", JSON.stringify(state.wishList));
      } else {
        state.wishList = [...state.wishList, payload];
        localStorage.setItem("wishList", JSON.stringify(state.wishList));
      }
    },

    handleRemoveWish: (state, { payload }) => {},
  },
});

export const {
  handleAmount,
  resetAmount,
  handleAddCart,
  closeCartModal,
  handleRemoveCart,
  handleCartAmount,
  handleAddToWish,
  handleRemoveWish,
} = addToCartSlice.actions;
export default addToCartSlice.reducer;
