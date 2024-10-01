import { rightImg, watchImg } from "@/utils/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";
import VideoCarousel from "./VideoCorousel";
const Highlight = () => {
  useEffect(() => {
    // Register the GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        scroller: document.body,
        trigger: "#highlights", // Set the trigger to the section
        start: "top bottom", // When the top of the section hits the bottom of the viewport
      },
    });

    // Link animations
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 0.5,
      scrollTrigger: {
        scroller: document.body,
        trigger: ".link",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="w-full mb-12 md:flex items-end justify-between">
          <h1 id="title" className="section-heading opacity-0 translate-y-10">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link opacity-0 translate-y-10">
              Watch the film
              <Image
                src={watchImg}
                alt="watch"
                className="ml-2"
                width={18}
                height={18}
              />
            </p>
            <p className="link opacity-0 translate-y-10">
              Watch the event
              <Image
                src={rightImg}
                alt="right"
                className="ml-2"
                width={8}
                height={8}
              />
            </p>
          </div>
        </div>
        {/* <Carousel /> */}
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlight;
