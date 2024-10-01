import { heroVideo, smallHeroVideo } from "@/utils/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(heroVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  // -------------------------------------------
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      y: -40,
    });
  }, []);
  return (
    <section className=" w-full nav-height bg-black relative  ">
      <div className="h-5/6  w-full flex-center items-center flex-col ">
        <p className="hero-title" id="hero">
          {" "}
          Iphone 15 pro
        </p>

        <div className="md:w-10/12 w-9/12  flex items-center justify-center ">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className=" flex flex-col mb-12 justify-center items-center opacity-0
       translate-y-20"
      >
        <Link href="#highlights" className="btn">
          Buy
        </Link>
        <p className="font-normal text-xl"> From $199/month or $999 </p>
      </div>
    </section>
  );
};

export default Hero;
