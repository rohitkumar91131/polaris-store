import { FiTruck, FiShield, FiHeadphones, FiLock } from "react-icons/fi";

export default function Features() {
  const features = [
    { icon: <FiTruck />, title: "Fast Shipping", desc: "Free on orders over $100" },
    { icon: <FiShield />, title: "Premium Quality", desc: "Tested for durability" },
    { icon: <FiHeadphones />, title: "24/7 Support", desc: "Dedicated experts" },
    { icon: <FiLock />, title: "Secure Payments", desc: "100% safe checkout" },
  ];

  return (
    <section className="bg-secondary py-16 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:-translate-y-1 transition-transform">
            <div className="text-3xl text-accent mb-4">{feature.icon}</div>
            <h4 className="font-bold text-primary mb-2">{feature.title}</h4>
            <p className="text-sm text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}