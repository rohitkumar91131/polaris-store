import { useSelector } from "react-redux";

export default function IndustrySection() {
  const industries = useSelector((state) => state.data.industries);

  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10">
        Shop By Industry
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((industry) => (
          <a
            key={industry.id}
            href={industry.link}
            className="group relative block h-72 overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Background */}
            <img
              src={industry.image}
              alt={industry.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-end p-6 md:p-8">
              <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {industry.name}
                </h3>

                {/* Button */}
                <span
                  className="
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white/15
                    backdrop-blur-md
                    px-5
                    py-3
                    text-sm
                    md:text-base
                    font-semibold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:bg-white/25
                    hover:scale-105
                  "
                >
                  Shop Now
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}