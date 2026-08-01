export default function CategorySection({ categories }) {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10">Featured Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <a 
            href={category.link}
            key={category.id} 
            className="group relative flex flex-col items-center justify-center h-48 rounded-2xl p-6 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Background Image & Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundImage: `url(${category.bgImage})` }} 
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
            
            {/* Content */}
            <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 mb-4 rounded-full overflow-hidden bg-white shadow-lg border-2 border-white">
              <img src={category.logo} alt={category.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="relative z-10 font-bold text-white tracking-wide text-center drop-shadow-md">
              {category.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}