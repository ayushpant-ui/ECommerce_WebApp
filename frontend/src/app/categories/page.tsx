import CategorySidebar from "@/components/CategorySidebar";

export default function CategoriesPage() {
  return (
    <div className="flex">

      <CategorySidebar />

      <main className="flex-1 p-8">

        <h1 className="mb-6 text-4xl font-bold">
          Products
        </h1>

        {/* Product Grid Here */}

      </main>

    </div>
  );
}