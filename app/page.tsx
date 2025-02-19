"use client";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import MovingRectangles from "./components/MovingRectangles";
import  Header  from "./components/Header";
import Homepage from "./components/Homepage";
gsap.registerPlugin(TextPlugin);



const Hero = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <MovingRectangles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // Lower z-index for background
        }}
      />
      
      <Header
        style={{
          position: "absolute", // Use absolute positioning
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1, // Higher z-index for header
          // backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      />
  <div style={{ position: "relative", zIndex: 2 , marginTop: "50px"}}>
        <Homepage />
      </div>
          </div>
  );
};

export default Hero;