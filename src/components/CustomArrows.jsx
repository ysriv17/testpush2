// eslint-disable-next-line react/prop-types
const CustomPrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#0496A5] text-white rounded-full p-3 z-10"
    onClick={onClick}
  >
    <i className="fas fa-chevron-left"></i>
  </button>
);

// eslint-disable-next-line react/prop-types
const CustomNextArrow = ({ onClick }) => (
  <button
    type="button"
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#0496A5] text-white rounded-full p-3 z-10"
    onClick={onClick}
  >
    <i className="fas fa-chevron-right"></i>
  </button>
);

export { CustomPrevArrow, CustomNextArrow };
