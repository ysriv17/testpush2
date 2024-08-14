import { useState } from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import FormPopup from "./elementalComponents/FormPopup";

const Hero = () => {
  const [showPopUp, setShowPopUp] = useState();

  const handleclick = () => {
    setShowPopUp(true);
  };
  const handleClose = () => {
    setShowPopUp(false);
  };
  const openCalendly = () =>{
    const url = 'https://calendly.com/dial247-info/30min'
    window.location.href = url
  }
  return (
    <div className="pb-8 flex flex-col">
      <div className="flex flex-col xl:flex-row items-center justify-center p-6 md:p-10 ">
        <div className="xl:w-[60%] space-y-4 lg:space-y-8">
          <h1 className="text-4xl md:text-6xl text-center font-Poppins text-black font-bold fade-in-up fade-in-up fade-in-up-delay-3">
            {/* D<span className="text-[#0388A7]">i</span>al 247 */}
            Future Of
            <span className="text-[#0388A7] ml-2 ">Voice </span> Call
            Interactions
          </h1>
          <div>
            <p className="text-base text-[#0388A7] text-center  fade-in-up delay-100">
              Get the worlds smartest AI tool to create engaging two-way phone
              conversations for your business.
            </p>
            <p className="text-base text-[#0388A7] text-center mb-6 fade-in-up delay-100">
              Dont just take our word for it, try it yourself—actions speak
              louder than words.
            </p>
          </div>
          <div className="space-y-4 md:space-y-0 md:flex items-center justify-center  md:space-x-4">
            <button
              onClick={handleclick}
              className="bg-[#0388A7] font-semibold flex items-center justify-center text-white px-4 py-2 rounded transition transform button-hover"
            >
              Get A Free Call With AI Now
              <MdOutlinePhoneInTalk className="ml-2 h-4 w-4" />
            </button>

            <button 
            onClick={openCalendly}
            className="bg-[#0388A7] font-semibold flex items-center justify-center text-white px-8 py-2 rounded transition transform button-hover">
              Talk to sales
              <MdOutlinePhoneInTalk className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      {showPopUp && <FormPopup onClose={handleClose} />}
    </div>
  );
};

export default Hero;
