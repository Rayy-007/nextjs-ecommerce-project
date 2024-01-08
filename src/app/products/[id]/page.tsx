import PriceTag from "@/components/PriceTag";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = async ({
  params: { id },
}: ProductDetailPageProps) => {
  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) notFound();

  return (
    <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-7">
      <Image
        src={product.imageUrl}
        alt={product.name}
        className="rounded-lg"
        width={500}
        height={500}
        priority
      />
      <div>
        <h1 className="text-3xl font-bold lg:text-5xl">{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
      </div>
    </section>
  );
};

export default ProductDetailPage;
