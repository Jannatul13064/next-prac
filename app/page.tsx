
"use client"

import About from "./about/page";
import Hero from "./component/Hero";
import Slider from "./component/Slider";
import Services from "./services/page";


export default function Home() {
  
  return (
    <div>
        <Hero/>
        <Slider/>
        <Services/>
        <About/>
        <h1>This is User</h1>
    </div>
  );
}
