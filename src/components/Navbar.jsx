import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-2 px-4 2xl:border-[#0496A5] 2xl:border-[1px] 2xl:rounded-2xl bg-blend-color-burn text-blue-950 2xl:bg-gray-200">
      <div className="logo">
        <img src={logo} alt="logoimg" />
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link
          to="/product"
          className="text-[#0496A5] text-lg font-Poppins hover:underline"
        >
          Product
        </Link>
        <button
          onClick={()=>{
            var element = document.getElementById("faq");
            element.scrollIntoView({
              block: "start",
              behavior: "smooth",
            })
          }}
          className="text-[#0496A5] text-lg font-Poppins  hover:underline"
        >
          FAQ
        </button>
        <Link
          to="/try-it"
          className="text-[#0496A5]  text-lg font-Poppins hover:underline"
        >
          Try it
        </Link>
        <Link
          to="/pricing"
          className="text-[#0496A5] text-lg font-Poppins  hover:underline"
        >
          Pricing
        </Link>
      </nav>
      <button
        className="md:hidden text-[#0496A5] focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white text-white flex flex-col items-center space-y-6 py-6 z-50">
          <Link
            to="/product"
            className="text-[#0496A5] hover:underline font-sans font-bold"
          >
            Product
          </Link>
          <Link
            to="/faq"
            className="text-[#0496A5] hover:underline font-sans font-bold"
          >
            FAQ
          </Link>
          <Link
            to="/try-it"
            className="text-[#0496A5] hover:underline font-sans font-bold"
          >
            Try it
          </Link>
          <Link
            to="/pricing"
            className="text-[#0496A5] hover:underline font-sans font-bold"
          >
            Pricing
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
