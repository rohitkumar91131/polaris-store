export default function PromoBanner({ promoData }) {
  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden bg-primary h-[400px] flex items-center shadow-lg">
        <img 
          src={promoData.image} 
          alt={promoData.heading} 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {promoData.heading}
          </h2>
          <p className="text-lg text-gray-200 mb-8 font-light">
            {promoData.description}
          </p>
          <a 
            href={promoData.buttonLink} 
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-accent hover:text-white transition-colors shadow-md"
          >
            {promoData.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}