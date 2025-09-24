"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const environments = [
  {
    title: "Power Supply",
    desc: "Ensure stable 220V/110V power with proper grounding.",
    img: "/images/power.jpg",
  },
  {
    title: "Room Conditions",
    desc: "Keep the room temperature between 20°C-26°C, dust-free.",
    img: "/images/room.jpg",
  },
  {
    title: "Accessories",
    desc: "Prepare transducers, printer, and gel before starting.",
    img: "/images/accessories.jpg",
  },
];

const probes = [
  { name: "Convex Probe", img: "/images/convex.jpg" },
  { name: "Linear Probe", img: "/images/linear.jpg" },
  { name: "Endocavitary Probe", img: "/images/endocavitary.jpg" },
  { name: "Cardiac Probe", img: "/images/cardiac.jpg" },
  { name: "Micro-Convex Probe", img: "/images/microconvex.jpg" },
  { name: "3D/4D Probe", img: "/images/3dprobe.jpg" },
];

const steps = [
  "Connect power and ensure proper grounding.",
  "Turn on the system and allow it to boot fully.",
  "Select and connect the appropriate transducer.",
  "Apply gel and position the transducer.",
  "Adjust imaging parameters (gain, depth, focus).",
  "Save and export images or reports as needed.",
];

export default function TrainingPage() {
  return (
    <section className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold text-indigo-700 leading-tight">
            Edan LX3 Training & Demonstration
          </h1>
          <p className="text-lg text-gray-600">
            Learn how to set up, operate, and maximize the performance of the{" "}
            <span className="font-semibold text-indigo-600">Edan LX3</span>{" "}
            Ultrasound System. Explore transducers, workflow, and required
            environments in an interactive way.
          </p>
          <a
            href="#setup"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Start Training
          </a>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0"
        >
          <Image
            src="/training/lx3.png"
            alt="Edan LX3"
            width={500}
            height={400}
            className="w-[28rem] rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Environment Setup */}
      <div
        id="setup"
        className="max-w-7xl mx-auto px-6 py-16 text-center space-y-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-indigo-700"
        >
          Required Environment Setup
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {environments.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-600">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Transducers */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center text-indigo-700 mb-12"
        >
          Available Transducers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {probes.map((probe, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
            >
              <Image
                src={probe.img}
                alt={probe.name}
                width={160}
                height={160}
                className="w-40 h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {probe.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Operation Steps */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center text-indigo-700 mb-12"
        >
          Basic Operation Guide
        </motion.h2>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 bg-white rounded-xl shadow-md flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <p className="text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
