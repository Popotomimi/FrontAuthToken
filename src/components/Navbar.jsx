// Hooks
import { useState } from "react";

// Router Dom
import { Link } from "react-router-dom";

// Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { SiJsonwebtokens } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-stone-900 p-4 mb-11">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl flex font-bold">
          <SiJsonwebtokens className="mr-3" /> JWT
        </h1>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          <RxHamburgerMenu className="text-2xl hover:bg-stone-600 rounded-sm" />
        </button>
      </div>
      <ul
        className={`md:flex md:justify-between md:items-center md:static absolute top-12 left-0 w-full bg-stone-900 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}>
        <li className="mt-5 mb-5">
          <Link
            className="text-white py-3 px-2 hover:bg-stone-600 rounded-sm"
            to="/">
            Home
          </Link>
        </li>
        <li className="mt-5 mb-5">
          <Link
            className="text-white py-3 px-2 hover:bg-stone-600 rounded-sm"
            to="/Login">
            Login
          </Link>
        </li>
        <li className="mt-5 mb-5">
          <Link
            className="text-white py-3 px-2 hover:bg-stone-600 rounded-sm"
            to="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
