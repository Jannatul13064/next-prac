// Services.jsx
import React from "react";

const services = [
  {
    title: "Ultrasound Imaging",
    description: "High-quality ultrasound scans with Edan LX3 for precise diagnostics.",
    icon: "/icons/ultrasound.png", // place in public/icons/
  },
  {
    title: "Digital Radiography",
    description: "Rayence FPD delivers fast, accurate digital X-ray imaging.",
    icon: "/icons/xray.png",
  },
  {
    title: "Medical Consultation",
    description: "Professional consultation for equipment selection and training.",
    icon: "/icons/consultation.png",
  },
  {
    title: "Maintenance & Support",
    description: "Reliable service and technical support for uninterrupted operations.",
    icon: "/icons/support.png",
  },
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="mx-auto h-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
