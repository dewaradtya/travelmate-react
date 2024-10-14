import React from "react";
import Hero from "../components/home/Hero";
import Search from "../components/home/Search";
import Service from "../components/home/Service";
import Promo from "../components/home/Promo";
import Destination from "../components/home/Destination";
import Testimonial from "../components/home/Testimonial";
import Gallery from "../components/home/Gallery";
import Blog from "../components/home/Blog";
import Partner from "../components/home/Partner";
import Newsletter from "../components/home/Newsletter";

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
