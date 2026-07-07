import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="bg-gray-50 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="font-semibold text-blue-600">
            OUR PRODUCTS
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            Featured Collection
          </h1>

          <p className="mt-4 text-gray-500">
            Discover premium products carefully selected for you.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </main>
  );
}