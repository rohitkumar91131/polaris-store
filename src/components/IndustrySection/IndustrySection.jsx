import { useSelector } from "react-redux";
import { ArrowRight } from "lucide-react";

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
            href={industry.link}
            key={industry.id}
            className="group relative block h-72 overflow-hidden rounded-2xl bg-slate-900 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            <img
              src={industry.image}
              alt={industry.name}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

            <div className="relative z-10 flex h-full items-end justify-between p-6 md:p-8">
              <h3 className="max-w-[65%] text-2xl font-bold text-white md:text-3xl">
                {industry.name}
              </h3>

              <span
                className="
                  flex items-center gap-2
                  rounded-full
                  bg-white/15
                  backdrop-blur-md
                  border border-white/25
                  px-4 py-2
                  text-sm font-semibold text-white
                  shadow-xl

                  md:px-6 md:py-3 md:text-base
                  md:opacity-0 md:translate-y-4
                  md:group-hover:translate-y-0
                  md:group-hover:opacity-100

                  transition-all duration-300
                "
              >
                Shop Now
                <ArrowRight size={16} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}