import React from "react";

const Hero = () => {
  return (
    <section className="relative text-blue-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight animate-fadeIn">
            Advanced Medical Imaging Solutions
          </h1>
          <p className="text-lg sm:text-xl text-black animate-fadeIn delay-200">
            Discover the power of precision with{" "}
            <span className="font-semibold">Ultrasound Edan LX3</span> and
            <span className="font-semibold"> Rayence FPD</span>. Cutting-edge
            technology designed for professionals.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4 animate-fadeIn delay-400">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Get in Touch
            </a>
            <a
              href="#learn-more"
              className="px-6 py-3 border border-white text-red-700 font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center relative animate-pulse">
          <img
            src="/images/ultrasound.png"
            alt="Ultrasound Edan LX3 and Rayence FPD"
            className="w-80 sm:w-96 lg:w-[28rem] animate-slideIn"
          />
          {/* Optional floating effect */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulseSlow"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulseSlow delay-200"></div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 1s ease forwards;
        }

        @keyframes pulseSlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }
        .animate-pulseSlow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        .animate-pulseSlow.delay-200 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
