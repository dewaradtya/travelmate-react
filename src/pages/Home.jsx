import React from "react";
import Hero from "../components/TempHome/Hero";
import Search from "../components/TempHome/Search";
import Service from "../components/TempHome/Service";
import Promo from "../components/TempHome/Promo";
import Destination from "../components/TempHome/Destination";
import Testimonial from "../components/TempHome/Testimonial";
import Gallery from "../components/TempHome/Gallery";
import Blog from "../components/TempHome/Blog";
import Partner from "../components/TempHome/Partner";
import Newsletter from "../components/TempHome/Newsletter";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Search />
      <Service />
      <Promo />
      <Destination />
      <Testimonial />
      <Gallery />
      <Blog />
      <Partner />
      <Newsletter />
    </div>
  );
}

export default Home;
