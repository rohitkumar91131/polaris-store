import { FiStar } from "react-icons/fi";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            {product.badge}
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-yellow-400 text-sm mb-2">
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <span className="text-gray-500 text-xs ml-1">
            ({product.rating})
          </span>
        </div>

        <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1 line-clamp-2 flex-1 hover:text-accent cursor-pointer">
          {product.name}
        </h3>

        <p className="text-lg font-bold text-primary mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}