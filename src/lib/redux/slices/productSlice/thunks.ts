import { fetchProducts } from "./fetchProducts";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";

const getProducts = createAppAsyncThunk("product/fetchProducts", async () => {
  const products = await fetchProducts();

  return products;
});

export { getProducts };
