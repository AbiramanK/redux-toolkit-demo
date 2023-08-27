import { combineReducers } from "@reduxjs/toolkit";

import { productSlice } from "@/lib/redux/slices/productSlice";

const rootReducer = combineReducers({
  product: productSlice?.reducer,
});

export { rootReducer };

export type RootState = typeof rootReducer;
