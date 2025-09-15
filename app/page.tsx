"use client";

import About from "./about/page";
import Hero from "./component/Hero";
import Slider from "./component/Slider";
import ContactPage from "./contact/page";
import Services from "./services/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <Services />
      <About />
      <ContactPage />
    </div>
  );
}
