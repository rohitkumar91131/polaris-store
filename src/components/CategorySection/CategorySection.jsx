export default function CategorySection({ categories }) {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10">Featured Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="group flex flex-col items-center bg-secondary rounded-2xl p-6 cursor-pointer hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
              <img src={category.logo} alt={category.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}