import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
// Using simple grid for Category & Industry sections for brevity
import ProductSection from "../components/ProductSection/ProductSection";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import Features from "../components/Features/Features";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import storeData from "../data/storeData.json";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <TopBar />
      <Header />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Categories (Inline simplified component) */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Hand Tools', 'Safety', 'Power Tools', 'Workwear'].map((cat, i) => (
              <div key={i} className="bg-secondary rounded-xl p-8 text-center cursor-pointer hover:bg-gray-100 transition-colors shadow-sm">
                <h3 className="font-bold text-primary">{cat}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Shop By Industry (Inline simplified component) */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-center mb-8">Shop By Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-900 rounded-2xl relative overflow-hidden flex items-end p-8 group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1508344928928-7157b87de541?w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" />
              <div className="relative z-10"><h3 className="text-white text-2xl font-bold">Construction</h3><button className="text-accent font-semibold mt-2">Shop Now &rarr;</button></div>
            </div>
            <div className="h-64 bg-gray-900 rounded-2xl relative overflow-hidden flex items-end p-8 group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" />
              <div className="relative z-10"><h3 className="text-white text-2xl font-bold">Manufacturing</h3><button className="text-accent font-semibold mt-2">Shop Now &rarr;</button></div>
            </div>
          </div>
        </section>

        <ProductSection title="Featured Products" products={storeData.featuredProducts} />
        <PromoBanner />
        <ProductSection title="New Arrivals" products={storeData.newArrivals} />
        <ProductSection title="Best Sellers" products={storeData.bestSellers} />
        <Features />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}