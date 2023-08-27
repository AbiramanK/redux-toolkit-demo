import { createAsyncThunk } from "@reduxjs/toolkit";

import type { RootState, AppDispatch } from "@/lib/redux/store";

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}>();

export { createAppAsyncThunk };
