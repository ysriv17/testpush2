import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const BookWalkthrough = () => {
  const handleClick = () => {
    window.open(
      "https://calendly.com/business-maxtron/30min?month=2024-07",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="py-8 px-4 lg:my-10">
      <div className="p-6  rounded-3xl lg:flex">
        <div className="lg:w-2/3 fade-in-up fade-in-up fade-in-up-delay-3">
          <h2 className="text-3xl md:text-7xl font-bold ">Book a</h2>

          <h2 className="text-3xl md:text-7xl font-Poppins font-bold mb-6">
            walkthrough
          </h2>
          <p className="mb-6 text-base font-Poppins fade-in-up fade-in-up fade-in-up-delay-3 md:w-2/3">
            Get a personalised walkthrough of Dial247
          </p>
        </div>

        <div className="flex justify-center items-center  transition transform  button-hover">
          <div className="my-10">
            <button
              onClick={handleClick}
              className="bg-[#0496A5] flex items-center font-Poppins justify-between mr-4 text-white rounded p-4"
            >
              Book
              <FaArrowUpRightFromSquare className="h-4 w-4 ml-4 text-white" />
            </button>
            {/* <iframe
              src="https://calendly.com/business-maxtron/30min?month=2024-07"
              width="300"
              height="250"
              className=""
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookWalkthrough;
