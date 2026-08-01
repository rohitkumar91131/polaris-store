export default function Hero() {
  return (
    <div className="relative w-full h-[70vh] flex items-center bg-gray-900">
      <img 
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80" 
        alt="Hero Banner" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 px-4 md:px-16 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Equip Your Business with Global Standards
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
          Premium tools, safety gear, and supplies for professionals worldwide. Built for durability, designed for excellence.
        </p>
        <button className="bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-transform transform hover:-translate-y-1 shadow-lg">
          Shop the Collection
        </button>
      </div>
    </div>
  );
}