import { useState } from "react";
import { FiX, FiShoppingCart, FiStar } from "react-icons/fi";

export default function QuickShopModal({ product, onClose }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark Blur Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      {/* Modal Box */}
      <div className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 md:bg-gray-100 p-2 rounded-full hover:bg-accent hover:text-white transition-colors"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Left: Image */}
        <div className="w-full md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover rounded-xl shadow-sm"
          />
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          {product.badge && (
            <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full w-max mb-4">
              {product.badge}
            </span>
          )}
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
          
          <div className="flex items-center gap-1 text-yellow-400 text-sm mb-4">
            <FiStar className="fill-current" />
            <FiStar className="fill-current" />
            <FiStar className="fill-current" />
            <FiStar className="fill-current" />
            <FiStar className="fill-current" />
            <span className="text-gray-500 text-sm ml-2">({product.rating} Reviews)</span>
          </div>

          <p className="text-3xl font-bold text-primary mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-8">{product.description}</p>

          {/* Variants */}
          {product.variants.length > 0 && (
            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-3">Select Option</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-all ${
                      selectedVariant === variant 
                      ? "border-accent bg-accent text-white" 
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button 
                className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >-</button>
              <span className="px-4 py-2 font-semibold text-gray-900">{quantity}</span>
              <button 
                className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >+</button>
            </div>
            
            <button className="flex-1 bg-accent hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md">
              <FiShoppingCart /> Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}