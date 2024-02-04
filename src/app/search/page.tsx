import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";

interface SearchPageProps {
  searchParams: { query: string };
}

export const generateMetadata = ({
  searchParams: { query },
}: SearchPageProps) => {
  return {
    title: `Search: ${query} - Flowmazon`,
  };
};

const SearchPage = async ({ searchParams: { query } }: SearchPageProps) => {
  const searchedProducts = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { id: "desc" },
  });

  if (searchedProducts.length === 0) {
    return (
      <div className="h-60 text-center text-2xl">
        There is no proudcts with the name{" "}
        <span className="font-bold">{query}</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {searchedProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default SearchPage;
