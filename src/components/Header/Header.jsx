import { FiSearch, FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <header className="px-4 md:px-8 py-6 flex items-center justify-between bg-white sticky top-0 z-40 shadow-sm">
      <div className="text-2xl font-bold tracking-tighter text-primary">
        POLARIS<span className="text-accent">.</span>
      </div>
      
      <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
        <input 
          type="text" 
          placeholder="Search products, brands, or categories..." 
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
        />
        <FiSearch className="absolute right-4 top-3 text-gray-400" />
      </div>

      <div className="flex items-center gap-4 md:gap-6 text-gray-700">
        <button className="hover:text-accent transition-colors"><FiHeart className="w-6 h-6" /></button>
        <button className="hover:text-accent transition-colors"><FiUser className="w-6 h-6" /></button>
        <button className="hover:text-accent transition-colors relative">
          <FiShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </button>
      </div>
    </header>
  );
}