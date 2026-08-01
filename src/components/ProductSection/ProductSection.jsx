import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductSection({ title, dataKey }) {
  // Directly pull the specific array from Redux state
  const products = useSelector((state) => state.data[dataKey]);

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">{title}</h2>
        <a href="#" className="text-sm font-semibold text-accent hover:underline">View All</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}