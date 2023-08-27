import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./thunks";
import { ProductInterface } from "./fetchProducts";

export interface ProductSliceState {
  data: Array<ProductInterface>;
  isLoading: boolean;
  error: string;
}

const initialState: ProductSliceState = {
  data: [],
  isLoading: false,
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts?.pending, (state) => {
        state.error = "";
        state.isLoading = true;
      })
      .addCase(getProducts?.fulfilled, (state, action) => {
        state.error = "";
        state.isLoading = false;
        state.data = action?.payload;
      })
      .addCase(getProducts?.rejected, (state, action) => {
        state.error = action?.error?.message!;
        state.isLoading = false;
      });
  },
});

export { productSlice };
