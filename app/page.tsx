"use client";

import About from "./about/page";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import ContactPage from "./contact/page";
import Services from "./services/page";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <Products />
      <Services />
      <About />
      <ContactPage />
    </div>
  );
}
