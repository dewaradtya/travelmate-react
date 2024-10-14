import React from "react";
import Typography from "../components/About/Typography";
import Map from "../components/About/Map";
import Facility from "../components/About/Facility";
import Choose from "../components/About/Choose";

function About() {
  return (
    <div className="About">
      <Typography />
      <Facility />
      <Choose />
      <Map />
    </div>
  );
}

export default About;
