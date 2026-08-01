import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import CategorySection from "../components/CategorySection/CategorySection";
import IndustrySection from "../components/IndustrySection/IndustrySection";
import ProductSection from "../components/ProductSection/ProductSection";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import Features from "../components/Features/Features";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import QuickShopModal from "../components/QuickShopModal/QuickShopModal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnnouncementBar />
      <TopBar />
      <Header />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* No props needed! Components fetch their own data via Redux */}
        <CategorySection />
        <IndustrySection />
        
        {/* Pass ONLY the string key, the component fetches the actual array */}
        <ProductSection title="Featured Products" dataKey="featuredProducts" />
        
        <PromoBanner />
        
        <ProductSection title="New Arrivals" dataKey="newArrivals" />
        <ProductSection title="Best Sellers" dataKey="bestSellers" />
        
        <Features />
        <Newsletter />
      </main>
      
      <Footer />
      
      {/* Global Modal mounted at the root level */}
      <QuickShopModal />
    </div>
  );
}