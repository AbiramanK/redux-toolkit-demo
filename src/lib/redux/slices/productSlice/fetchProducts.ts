export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function fetchProducts(): Promise<Array<ProductInterface>> {
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
