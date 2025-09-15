
"use client"
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Slider from "./component/Slider";
import Services from "./services/page";


export default function Home() {
  
  return (
    <div>
      <Header/>
      <Hero/>
      <Slider/>
      <Services/>
      <h1>This is User</h1>
      <Footer/>
    </div>
  );
}
