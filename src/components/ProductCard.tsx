import { Fragment } from "react";

export interface ProductCardProps {
  id: number;
  title: string;
  description?: string;
  image?: string;
  price?: number;
}

function ProductCard(props: ProductCardProps) {
  return (
    <Fragment>
      <div id={props?.id?.toString()} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={props?.image}
            alt={props?.title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div className="flex flex-col gap-y-1 w-9/12">
            <h3 className="text-sm text-black font-semibold line-clamp-1">
              <a href={"#"}>
                <span aria-hidden="true" className="absolute inset-0" />
                {props?.title}
              </a>
            </h3>
            <p className="text-sm font-medium text-gray-700 text-ellipsis line-clamp-2">
              {props?.description}
            </p>
          </div>
          <h3 className="mt-1 text-lg tracking-tight font-bold text-black">
            ${props?.price}
          </h3>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductCard;
