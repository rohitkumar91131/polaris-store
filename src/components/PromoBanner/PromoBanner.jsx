export default function PromoBanner() {
  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden bg-primary h-[400px] flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356fce?w=1200&q=80" 
          alt="Promo" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Grade Tools Set</h2>
          <p className="text-gray-300 mb-8">Upgrade your workspace with our premium selected bundles. Save up to 30% when you buy the complete set.</p>
          <button className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-accent hover:text-white transition-colors">
            Explore Bundles
          </button>
        </div>
      </div>
    </section>
  );
}