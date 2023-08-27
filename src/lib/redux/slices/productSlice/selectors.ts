import { RootState } from "@/lib/redux/store";

const selectProducts = (state: RootState) => state?.product?.data;
const selectIsLoading = (state: RootState) => state?.product?.isLoading;
const selectError = (state: RootState) => state?.product?.error;

export { selectProducts, selectIsLoading, selectError };
