import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" }, // Order by new items to old items
  });

  return (
    <section>
      <div className="hero rounded-2xl bg-base-200 ">
        <div className="hero-content flex flex-col lg:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={400}
            height={800}
            className="max-w-sm rounded-lg shadow-lg"
          />
          <div className="lg:py-17 flex flex-col items-center lg:items-start lg:px-6">
            <h1 className=" text-3xl font-bold lg:text-5xl">
              {products[0].name}
            </h1>
            <p className="py-4 text-center lg:py-6 lg:text-left">
              {products[0].description}
            </p>
            <Link
              href={`/products/${products[0].id}`}
              className="btn-primary btn"
            >
              Check it out
            </Link>
          </div>
        </div>
      </div>
      <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Use of slice -> want to ignore the first item */}
        {products.slice(1).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default page;
