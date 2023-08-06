import React, { useState } from "react";

const Home = () => {

  const buttons = [
    { id:"1", logo: "code-slash-outline", name: "Engineering", btncolor: "yellow"},
    { id:"2", logo: "qr-code-outline", name: "Design", btncolor: "blue"},
    { id:"3", logo: "barcode-outline", name: "AI", btncolor: "red"},
  ];

  const [bottomButtonName, setBottomButtonName] = useState("Check out Pealize Lab");
  const [description, setDescription] = useState("From design and engineering to AI, our expert services combine seamlessly, ensuring your success through exceptional, integrated solutions.");

  const handleButtonClick = (name) => {
    setBottomButtonName(`Check out Pealize ${name}`);
    
    // Update description based on the clicked button
    switch (name) {
      case "Engineering":
        setDescription("Fueled by expertise, our engineering services power innovation. Precision, creativity, and dedication converge to drive your success story forward.");
        break;
      case "Design":
        setDescription("Experience elevated projects through our cutting-edge design solutions, where creativity and innovation seamlessly merge for outstanding outcomes.");
        break;
      case "AI":
        setDescription("Unlock AI's potential through our expertise, driving innovation and delivering transformative solutions that redefine possibilities for success.");
        break;
      default:
        setDescription("From design and engineering to AI, our expert services combine seamlessly, ensuring your success through exceptional, integrated solutions.");
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-5 px-20 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <div className="md:text-left text-center">
          <h1 className="md:text-3xl text-2xl py-1 md:leading-normal leading-10 text-white font-bold">Empowering Innovations Through Code<br></br> Crafting Digital Solutions with Precision<br></br> <span className="text-yellow-500 md:text-2xl text-sm">Your Vision, Our Expertise, Limitless Possibilities.</span></h1>
          <div className="text-1xl flex mt-5 items-center justify-center md:justify-start gap-5">
            {buttons?.map((content) => (
              <button
                key={content.id}
                className={`bg-transparent text-sm hover:bg-yellow-400 focus:bg-yellow-400 text-white hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded-full`}
                onClick={() => handleButtonClick(content.name)}
              >
                <a className=" flex items-center justify-center text-white"><ion-icon name={content.logo} className="text-lg" ></ion-icon><span className="ml-2 text-sm">{content.name}</span></a>
              </button>
            ))}
          </div>
          <p className="max-w-[30rem] md:text-1xl mt-5">{description}</p>
          <button className={`text-sm mt-10 hover:bg-yellow-400 bg-yellow-500 py-2 px-4 rounded`}>
                <a className=" flex items-center justify-center text-black ">{bottomButtonName}<ion-icon name='link-outline' style={{ marginLeft: '0.5rem'}} ></ion-icon></a>
          </button>
        </div>
      </div>
      <div className="flex-1 ">
        {/* <img src={hero} alt="" className="md:w-11/12 h-full object-cover" /> */}
      </div>
    </section>
  );
};

export default Home;
