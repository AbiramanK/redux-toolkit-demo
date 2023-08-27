import { Fragment } from "react";

import { ProductCard } from ".";
import { ProductInterface } from "@/lib/redux/slices/productSlice/fetchProducts";

export interface ProductListProps {
  data: Array<ProductInterface>;
}

function ProductList(props: ProductListProps) {
  return (
    <Fragment>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {props?.data?.map((data) => (
          <ProductCard
            key={data?.id}
            id={data?.id}
            title={data?.title}
            description={data?.description}
            price={data?.price}
            image={data?.image}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default ProductList;
