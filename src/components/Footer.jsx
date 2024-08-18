import logo from "../assets/logo.svg";

// Adjust the path to your logo image

const Footer = () => {
  return (
    <footer className="bg-gray-100 rounded-lg  text-gray-500 p-4">
      <div className="container mx-auto flex flex-col  justify-between">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="mb-4 md:w-1/2 md:mb-0">
            <img
              src={logo}
              alt="logoimg"
              className="h-20 w-auto mb-2 md:mb-0"
            />
            {/* <p className="text-[#0496A5]">
              Harness the power of the worlds smartest AI to create engaging,
              natural phone call conversations for your business needs.
            </p> */}
          </div>
        </div>
        <hr className="border-gray-300 w-full my-4" />
        <div className="flex flex-col md:flex-row  justify-between w-full items-center">
          <p className="text-center md:text-center mb-2 md:mb-0">
            © 2024 Dial247.ai
          </p>
          <p>All Rights Reserved.</p>
          <div className="text-center md:text-right justify-between">
            Privacy policy
            <span className="mx-1">|</span>
            Security
            <span className="mx-1">|</span>
            Terms of service
            {/* <span className="mx-1">|</span> */}
            {/* <a
              href="https://www.linkedin.com/company/dial247-ai"
              className="text-gray-500 hover:underline mx-1"
            >
              LinkedIn
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
