import React from "react";


const Slider = () => {
  const brands = [
    "/brands/brand1.jpg",
    "/brands/brand3.jpg",
    "/brands/brand2.jpg",
    "/brands/brand4.jpg",
    "/brands/brand5.jpg",
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Trusted by Prestigious Brands
      </h2>

      <div className="overflow-hidden relative">
        <div className="flex animate-slideLeft gap-30">
          {/* Duplicate logos for seamless infinite scroll */}
          {[...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
              <img
                src={brand}
                alt={`Brand ${idx + 1}`}
                className="h-40 w-40 transition"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slideLeft {
          display: flex;
          animation: slideLeft 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Slider;
