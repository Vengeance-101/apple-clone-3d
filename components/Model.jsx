import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState } from "react";
import Modelview from "./Modelview";
gsap.registerPlugin(ScrollTrigger);
const Model = () => {
  const [size, setfirst] = useState("small");
  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        scroller: document.body,
        trigger: ".model-section",
        start: "top 60%",
      },
    });
  }, []);

  return (
    <section className="common-padding model-section">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading    ">
          Take a closer look
        </h1>

        <div className="flex flex-col  items-center mt-5">
          <div className="w-full h-[75vh]  md:h-[90vh] overflow-hidden relative ">
            <Modelview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
