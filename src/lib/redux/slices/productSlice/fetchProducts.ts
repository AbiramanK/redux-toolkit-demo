async function fetchProducts(): Promise<Array<any>> {
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });

  if (response?.ok) {
    const products = await response?.json();

    return products as unknown as Promise<Array<any>>;
  }

  throw Error(response?.status?.toString());
}

export { fetchProducts };
