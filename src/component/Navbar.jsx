/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa";

const Navbar = ({ progress, toggleMenu }) => {
  let message;
  switch (progress) {
    case 1:
      message = "Enter User Details";
      break;
    case 2:
      message = "Enter Personal Details";
      break;
    case 3:
      message = "Confirm Data";
      break;
    default:
      message = "Success";
      break;
  }
  return (
    <div className=" bg-cyan-500 border-b-2 border-b-gray-400 text-white py-3 text-center relative">
      <span
        className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={toggleMenu}
      >
        <FaBars />
      </span>
      {message}
    </div>
  );
};
export default Navbar;
