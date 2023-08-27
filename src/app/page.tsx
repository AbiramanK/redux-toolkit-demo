"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectError, selectIsLoading, selectProducts } from "@/lib/redux";
import { useEffect } from "react";
import { getProducts } from "@/lib/redux";

function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <main className={styles.main}>
      <h1>Products</h1>
      {(isLoading || products?.length === 0) && !error && (
        <span>Loading...</span>
      )}
      {!isLoading && products?.length > 0 && (
        <code>{JSON.stringify(products)}</code>
      )}
      {error && <span style={{ color: "red" }}>{error}</span>}
    </main>
  );
}

export default Home;
