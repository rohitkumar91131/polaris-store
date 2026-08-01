import { useSelector } from "react-redux";

export default function PromoBanner() {
  const promotional = useSelector((state) => state.data.promotional);

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden bg-primary h-[400px] flex items-center shadow-lg group">
        
        {/* FIX: Removed mix-blend-overlay and changed opacity to 50 for clear visibility */}
        <img 
          src={promotional.image} 
          alt={promotional.heading} 
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{promotional.heading}</h2>
          <p className="text-lg text-gray-200 mb-8 font-light">{promotional.description}</p>
          <a href={promotional.buttonLink} className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-accent hover:text-white transition-colors shadow-md">
            {promotional.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}