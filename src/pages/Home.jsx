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

// Import the single source of truth data
import storeData from "../data/storeData.json";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnnouncementBar />
      <TopBar />
      <Header />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <CategorySection categories={storeData.categories} />
        <IndustrySection industries={storeData.industries} />
        
        <ProductSection title="Featured Products" products={storeData.featuredProducts} />
        
        <PromoBanner promoData={storeData.promotional} />
        
        <ProductSection title="New Arrivals" products={storeData.newArrivals} />
        <ProductSection title="Best Sellers" products={storeData.bestSellers} />
        
        <Features />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}