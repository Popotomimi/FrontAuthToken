// React Router Dom
import { Link } from "react-router-dom";

// Hooks
import { useState, useContext } from "react";

// Icons
import { LuLogOut } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiJsonwebtokens } from "react-icons/si";

// Context
import { Context } from "../context/UserContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { authenticated, logout, user } = useContext(Context);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-stone-900 p-4 mb-11">
      <div className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text-white text-xl flex font-bold">
            <SiJsonwebtokens className="mr-3" /> JWT
          </h1>
        </Link>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <IoMdClose className="text-2xl hover:bg-stone-600 rounded-sm" />
          ) : (
            <RxHamburgerMenu className="text-2xl hover:bg-stone-600 rounded-sm" />
          )}
        </button>
      </div>
      <ul
        className={`md:flex md:justify-between md:items-center md:static absolute top-12 left-0 w-full bg-stone-900 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}>
        {authenticated ? (
          <>
            <li className="mt-5 mb-5">
              <Link
                className="text-white p-2 hover:bg-stone-600 rounded-sm"
                onClick={toggleMenu}
                to={`/edit/${user?._id || ""}`}>
                Edit Profile
              </Link>
            </li>
            <li className="mt-5 mb-5">
              <Link
                className="text-white p-2 hover:bg-stone-600 rounded-sm"
                onClick={toggleMenu}
                to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li
              className="flex cursor-pointer mt-5 mb-5 items-center text-white p-2 hover:text-white hover:bg-red-500 rounded-sm transition duration-500"
              onClick={() => {
                logout();
                toggleMenu();
              }}>
              <LuLogOut className="mr-2" /> Logout
            </li>
          </>
        ) : (
          <>
            <li className="mt-5 mb-5">
              <Link
                className="text-white p-2 hover:bg-stone-600 rounded-sm"
                onClick={toggleMenu}
                to="/">
                Home
              </Link>
            </li>
            <li className="mt-5 mb-5">
              <Link
                className="text-white p-2 hover:bg-stone-600 rounded-sm"
                onClick={toggleMenu}
                to="/Login">
                Login
              </Link>
            </li>
            <li className="mt-5 mb-5">
              <Link
                className="text-white p-2 hover:bg-stone-600 rounded-sm"
                onClick={toggleMenu}
                to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
