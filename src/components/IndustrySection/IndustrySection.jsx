import { useSelector } from "react-redux";

export default function IndustrySection() {
  const industries = useSelector((state) => state.data.industries);

  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10">Shop By Industry</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((industry) => (
          <a href={industry.link} key={industry.id} className="block h-72 bg-gray-900 rounded-2xl relative overflow-hidden flex items-end p-8 group cursor-pointer shadow-md hover:shadow-2xl transition-shadow">
            <img src={industry.image} alt={industry.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500" />
            
            <div className="relative z-10 w-full flex justify-between items-end">
              <h3 className="text-white text-3xl font-bold drop-shadow-md">{industry.name}</h3>
              
              {/* FIX: Made always visible on mobile, hover effect applied only on md and larger screens */}
              <span className="bg-accent text-white px-6 py-2 rounded-full font-semibold opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 shadow-md md:shadow-none">
                Shop Now
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}