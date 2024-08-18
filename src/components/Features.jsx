import useSound from "use-sound";
import sampleCall from "../assets/sampleCall.wav";
import { useState } from "react";
import { MdHeadsetOff } from "react-icons/md";
import { MdHeadset } from "react-icons/md";

const Features = () => {
  const [playSound] = useSound(sampleCall);
  const [open, setOpen] = useState(false);
  return (
    <div className=" px-4 py-8 md:py-10">
      <div className="p-6 md:p-10 bg-gray-100 rounded-3xl lg:flex">
        <div className="lg:w-2/3 fade-in-up fade-in-up fade-in-up-delay-3">
          <h2 className="text-3xl font-Poppins md:text-7xl font-bold mb-6">
            Listen It Here
          </h2>
          <p className="mb-2 font-Poppins fade-in-up text-gray-600 fade-in-up fade-in-up-delay-3 md:w-2/3">
            Here is a call recording for you to check out.
          </p>
          <p className="mb-6 font-Poppins fade-in-up text-gray-600 fade-in-up fade-in-up-delay-3 md:w-2/3">
            Give it a listen and see how naturally the AI communicates. It
            listens, has a human-like voice, and adapts its conversation style
            to match the person its talking to.
          </p>
        </div>
        <div className="flex justify-center items-center font-Poppins transition transform  button-hover">
          <div className="flex flex-col items-center sm:gap-10 gap-5 h-full">
            {open ? (
              <MdHeadset className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] " />
            ) : (
              <MdHeadsetOff className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] " />
            )}
            <button
              onClick={() => {
                playSound;
                setOpen(!open);
              }}
              className="bg-[#0496A5] flex items-center justify-between text-white rounded p-4"
            >
              Listen to the recordings here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
