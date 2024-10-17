import React from "react";
import Hero from "../components/Home/Hero";
import Search from "../components/Home/Search";
import Service from "../components/Home/Service";
import Promo from "../components/Home/Promo";
import Destination from "../components/Home/Destination";
import Testimonial from "../components/Home/Testimonial";
import Gallery from "../components/Home/Gallery";
import Blog from "../components/Home/Blog";
import Partner from "../components/Home/Partner";
import Newsletter from "../components/Home/Newsletter";

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
