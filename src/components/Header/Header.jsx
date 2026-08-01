import { FiSearch, FiHeart, FiUser, FiMenu } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileMenu } from "../../store/slices/uiSlice";

export default function Header() {
  const dispatch = useDispatch();
  const headerLinks = useSelector((state) => state.data.headerLinks);

  return (
    <header className="px-4 md:px-8 py-5 flex items-center justify-between bg-white sticky top-0 z-40 shadow-sm">
      
      {/* Mobile Menu & Logo Section */}
      <div className="flex items-center gap-4">
        {/* Hamburger Menu - Visible only on mobile */}
        <button 
          className="md:hidden text-gray-800 hover:text-accent transition-colors p-1" 
          onClick={() => dispatch(toggleMobileMenu())}
        >
          <FiMenu className="w-7 h-7" />
        </button>

        <a href="/" className="flex-shrink-0 cursor-pointer">
          <img 
            src="/assets/images/logo.webp" 
            alt="Store Logo" 
            className="h-8 md:h-10 object-contain"
          />
        </a>
      </div>
      
      {/* Search Bar - Hidden on mobile, visible on medium+ */}
      <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
        <input 
          type="text" 
          placeholder="Search products, brands, or categories..." 
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-gray-50"
        />
        <FiSearch className="absolute right-4 top-3 text-gray-400" />
      </div>

      {/* Dynamic Data-Driven Icons */}
      <div className="flex items-center gap-4 md:gap-6 text-gray-700">
        {/* Heart Icon - Removed 'hidden sm:block' so it is visible on mobile */}
        <a href={headerLinks.wishlist} className="hover:text-accent transition-colors block">
          <FiHeart className="w-6 h-6" />
        </a>
        
        {/* User Icon - Removed 'hidden sm:block' so it is visible on mobile */}
        <a href={headerLinks.profile} className="hover:text-accent transition-colors block">
          <FiUser className="w-6 h-6" />
        </a>
      </div>
      
    </header>
  );
}