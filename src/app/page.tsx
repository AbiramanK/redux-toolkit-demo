"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectError, selectIsLoading, selectProducts } from "@/lib/redux";
import { useEffect } from "react";
import { getProducts } from "@/lib/redux";
import {
  PageSectionTitle,
  ProductCard,
  ProductList,
  Spinner,
} from "@/components";

function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <main className={`${styles.main} bg-white`}>
      <h1 className="py-9 text-2xl font-bold tracking-tight text-gray-900">
        Products
      </h1>
      {(isLoading || products?.length === 0) && !error && <Spinner />}
      {error && <span style={{ color: "red" }}>{error}</span>}
      {!isLoading && products?.length > 0 && (
        <>
          <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-0">
            <PageSectionTitle>Customers also purchased</PageSectionTitle>
            <ProductList data={products} />
          </div>
        </>
      )}
    </main>
  );
}

export default Home;
