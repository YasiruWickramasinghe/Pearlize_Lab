import React from "react";
import shape1 from "../assets/images/shape_2.png";

const Contact = () => {

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
         Let's <span className="text-yellow-500">Talk</span>
        </h3>
        {/* <p>Book a Free consultation with one of our specialists, so that we can discuss how Pearlize Lab can help your business to build the product you have in mind.</p> */}
        {/* <button>Book Consultation</button> */}
        {/* <h3 className="text-4xl font-semibold">
        Send us a message
        </h3> */}
        {/* <form action=""></form> */}

        <section className="min-h-screen flex py-5 px-20 md:flex-row flex-col items-center">
          <div className="flex-1">
            <img src={shape1} alt="" className="md:w-11/12 h-full object-cover" />
          </div>
          <div className="flex-1 flex items-center justify-center h-full">
            <div className="text-center mt-8">
              <h3 className="text-4xl font-semibold">
                We are Perlizians
              </h3>
              <p className="py-10 px-20 md:text-1xl">At <span className="text-yellow-500 font-semibold md:text-2xl">Pearlize Lab</span>, we are at the forefront of innovation, offering a fusion of software engineering, cutting-edge design, and AI prowess. With a relentless pursuit of excellence, we navigate the digital realm, crafting transformative solutions that redefine industries. Our team of dedicated experts thrives on challenges, pushing boundaries to shape a future where technology knows no bounds. Discover the synergy of artful design, precise engineering, and the limitless potential of AI with us.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
