import { ConvertTimeToString } from "@/firebase/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";

// here the async functions

export const getTheDocs = createAsyncThunk(
  "filter/getTheDocs",
  async (query) => {
    const { q, values, setLastVisible } = query;
    const res = await getDocs(q);

    const products = res.docs.map((doc) => {
      const data = { ...doc.data() };
      data.createdAt = ConvertTimeToString(data.createdAt);

      setLastVisible(res.docs[res.docs.length - 1]);

      return { ...data, id: doc.id };
    });

    return { products, values };
  }
);

// here the states

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    all_products: [],
    loading: false,
    productsLength: 0,
    currentPage: 1,
    tempProducts: [],
    error: "",
  },

  // reducers
  reducers: {
    getAllProducts: (state, { payload }) => {
      state.all_products = [...payload];
    },

    setLoading: (state, { payload }) => {
      state.loading = payload;
    },

    // sort method
    sortBy: (state, { payload }) => {
      const { field, sortOrder, products } = payload;

      if (field && sortOrder) {
        const sortedProducts = [...products];

        sortedProducts.sort((a, b) => {
          if (sortOrder === "asc") {
            return field === "prize"
              ? Number(a[field]) - Number(b[field])
              : a[field].localeCompare(b[field]);
          } else if (sortOrder === "desc") {
            return field === "prize"
              ? Number(b[field]) - Number(a[field])
              : b[field].localeCompare(a[field]);
          } else {
            return 0;
          }
        });

        state.all_products = sortedProducts;
      }
    },

    setProductsLength: (state, { payload }) => {
      state.productsLength = payload;
    },

    setCurrentPage: (state, { payload }) => {
      if (payload === "increment") {
        state.currentPage++;
      } else if (payload === "decrement") {
        state.currentPage--;
      } else {
        state.currentPage = payload;
      }
    },

    // filter by category

    filterBy: (state, { payload }) => {
      const { products } = payload;
      try {
        let tempProducts = [];
        if (products && products.length > 0) {
          tempProducts = [...products];
          state.all_products = tempProducts;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  // extra reducers

  extraReducers: (builder) => {
    builder.addCase(getTheDocs.fulfilled, (state, { payload }) => {
      const { products, values } = payload;
      const { sizes, compositions, properties } = values;

      // set tempProducts
      let tempProducts = [];
      if (products && products.length > 0) {
        tempProducts = [...products];
        state.all_products = tempProducts;
        state.loading = false;
      }

      // sizes
      if (sizes.length > 0) {
        tempProducts = tempProducts.filter((product) => {
          for (let i = 0; i < sizes.length; i++) {
            if (!product.sizes.includes(sizes[i])) {
              return false;
            }
          }
          return true;
        });

        state.all_products = tempProducts;
      }

      if (compositions.length > 0) {
        tempProducts = tempProducts.filter((product) => {
          for (let i = 0; i < compositions.length; i++) {
            if (!product.composition.includes(compositions[i])) {
              return false;
            }
          }
          return true;
        });

        state.all_products = tempProducts;
      }

      if (properties.length > 0) {
        tempProducts = tempProducts.filter((product) => {
          for (let i = 0; i < properties.length; i++) {
            if (!product.properties.includes(properties[i])) {
              return false;
            }
          }
          return true;
        });

        state.all_products = tempProducts;
      }
    });

    // if rejected

    builder.addCase(getTheDocs.rejected, (state, { _, error }) => {
      state.error = error.message;
      console.log(error.message);
    });
  },
});

export const {
  getAllProducts,
  sortBy,
  setLoading,
  setProductsLength,
  setCurrentPage,
  filterBy,
} = filterSlice.actions;
export default filterSlice.reducer;
