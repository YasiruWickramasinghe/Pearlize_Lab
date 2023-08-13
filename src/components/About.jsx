import React from "react";
import shape1 from "../assets/images/shape_2.png";

const About = () => {

  return (
    <section id="about" className="py-10 px-20 bg-gray-800 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          <span className="text-yellow-500">About</span> Us
        </h3>
        <section className="flex  px-20 md:flex-row flex-col items-center">
          <div className="flex-1">
            <img src={shape1} alt="" className="md:w-11/12 h-full object-cover" />
          </div>
          <div className="flex-1 flex items-center justify-center h-full">
            
              <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-gray-900 shadow">
                <div className="text-center mt-8">
                  <h3 className="text-4xl font-semibold">
                    We are Perlizians
                  </h3>
                  <p className="py-10 px-20 md:text-xs">At <span className="text-yellow-500 font-semibold md:text-2xl">Pearlize Lab</span>, we are at the forefront of innovation, offering a fusion of software engineering, cutting-edge design, and AI prowess. With a relentless pursuit of excellence, we navigate the digital realm, crafting transformative solutions that redefine industries. Our team of dedicated experts thrives on challenges, pushing boundaries to shape a future where technology knows no bounds. Discover the synergy of artful design, precise engineering, and the limitless potential of AI with us.</p>
                </div>
              </div>
            
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
