import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "addToCart",

  initialState: {
    amount: 1,
    isCartModalOpen: false,
    cartProducts: JSON.parse(localStorage?.getItem("cartProducts")) || [],
    currentProductID: "",
  },

  // reducers
  reducers: {
    handleAmount: (state, { payload }) => {
      const { direction, stock } = payload;

      if (direction === "increament") {
        if (stock === state.amount) return;
        state.amount++;
      } else {
        if (state.amount === 1) return;
        state.amount--;
      }
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
  },
});

export const { handleAmount, handleAddCart, closeCartModal, handleRemoveCart } =
  addToCartSlice.actions;
export default addToCartSlice.reducer;
