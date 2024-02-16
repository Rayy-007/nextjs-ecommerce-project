import Link from "next/link";
import DiscountCounter from "./DiscountCounter";
import { prisma } from "@/lib/db/prisma";
import ProductCard from "./ProductCard";

interface ProductContainerProps {
  label: string;
  title: string;
  disCounter?: boolean;
  arrow?: boolean;
  isAllProducts?: boolean;
  isTowCol?: boolean;
}

const ProductContainer = async ({
  label,
  title,
  disCounter = false,
  arrow = false,
  isAllProducts = false,
  isTowCol = false,
}: ProductContainerProps) => {
  const allProducts = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="w-full pb-6 pt-16">
      {/* Title */}
      <div className="flex flex-col gap-4">
        <h6 className="flex items-center gap-5  text-base font-semibold text-primary">
          <span className="h-12 w-5 rounded-lg bg-primary"></span>
          {label}
        </h6>
        <div className="flex items-end gap-7">
          <h2 className="text-4xl font-bold">{title}</h2>
          {disCounter && (
            <div>
              <DiscountCounter endDate={new Date("2024-02-18T23:59:59")} />
            </div>
          )}
          {arrow ? (
            <div className="ml-auto mr-7 flex items-center gap-4">
              <button className=" btn-circle btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5L4 12L11 19M4 12H20"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="btn-circle btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 12H20M20 12L13 5M20 12L13 19"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <Link
              href="/products"
              className="btn-primary btn-md btn ml-auto mr-7"
            >
              View All
            </Link>
          )}
        </div>
      </div>
      {/* Card */}
      <div className="no-scrollbar my-8 flex  w-full  basis-96 gap-6 overflow-x-scroll pb-7 ">
        {(isAllProducts ? allProducts : allProducts.slice(7)).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            discount={disCounter}
          />
        ))}
      </div>
      {isTowCol && (
        <div className="no-scrollbar my-8 flex  w-full  basis-96 gap-6 overflow-x-scroll pb-7 ">
          {allProducts.slice(8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductContainer;
