import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./thunks";

export interface ProductSliceState {
  data: Array<any>;
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
        state.isLoading = true;
      })
      .addCase(getProducts?.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload;
      })
      .addCase(getProducts?.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message!;
      });
  },
});

export { productSlice };
