import { useState, useEffect } from "react";
import { FiX, FiShoppingCart, FiStar } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { closeQuickShop } from "../../store/slices/uiSlice";

export default function QuickShopModal() {
  const dispatch = useDispatch();
  const { isOpen, product } = useSelector((state) => state.ui.quickShopModal);
  
  const [selectedVariant, setSelectedVariant] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product?.variants?.length) {
      setSelectedVariant(product.variants[0]);
    }
    setQuantity(1);
  }, [product]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => dispatch(closeQuickShop())} />
      
      <div className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-200">
        <button onClick={() => dispatch(closeQuickShop())} className="absolute top-4 right-4 z-20 bg-white shadow-md md:bg-gray-100 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
          <FiX className="w-5 h-5" />
        </button>

        <div className="w-full md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full h-auto max-h-[40vh] md:max-h-none object-contain rounded-xl drop-shadow-sm"/>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="p-8 md:p-10 pb-4">
            {product.badge && <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full w-max mb-4">{product.badge}</span>}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
            <div className="flex items-center gap-1 text-yellow-400 text-sm mb-4">
              <FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" />
              <span className="text-gray-500 text-sm ml-2">({product.rating} Reviews)</span>
            </div>
            <p className="text-3xl font-bold text-primary mb-6">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-8">{product.description}</p>

            {product.variants?.length > 0 && (
              <div className="mb-6">
                <p className="font-semibold text-gray-900 mb-3">Select Option</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button key={variant} onClick={() => setSelectedVariant(variant)} className={`px-4 py-2 rounded-md border text-sm font-medium transition-all ${selectedVariant === variant ? "border-accent bg-accent text-white" : "border-gray-300 text-gray-700 hover:border-gray-400"}`}>
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* FIX: Sticky Bottom Bar for Mobile */}
          <div className="sticky bottom-0 bg-white p-6 md:px-10 border-t border-gray-100 z-10 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.1)] md:shadow-none mt-auto">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                <button className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span className="px-4 py-2 font-semibold text-gray-900">{quantity}</span>
                <button className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="flex-1 bg-accent hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md">
                <FiShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}