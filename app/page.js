"use client";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
    });

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []); // Empty dependency array ensures this runs once

  return (
    <div className="h-full w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
    </div>
  );
}
