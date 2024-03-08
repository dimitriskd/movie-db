import { useState } from "react";
import logo from "../assets/logo/logo-line/svg/logo-no-background.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto md:flex justify-between">
        <div className="flex items-center justify-between">
          <a href="#">
            <img className="w-auto h-10 sm:h-7" src={logo} alt="Movie-DB" />
          </a>
          <div className="relative ml-8 hidden md:block mt-4 md:mt-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="material-symbols-outlined text-gray-400">
                search
              </span>
            </span>

            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600  focus:outline-none focus:ring focus:ring-opacity-80 focus:ring-persian-blue-700"
              placeholder="Search"
            />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden transition-all ease-in duration-200">
            <button
              onClick={handleClick}
              type="button"
              className="flex text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {/* Open Icon */}
              {!isOpen && (
                <span className="material-symbols-outlined">menu</span>
              )}
              {/* Close Icon */}
              {isOpen && (
                <span className="material-symbols-outlined">close</span>
              )}
            </button>
          </div>
        </div>

        {/* Always show the menu on desktop */}
        <div className="hidden md:flex">
          <div className="flex flex-col md:flex-row ">
            <a
              href="#"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
            >
              Home
            </a>
            <a
              href="#"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
            >
              About
            </a>
            <a
              href="#"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        {isOpen && (
          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
            <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
              <a
                href="#"
                className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
              >
                Home
              </a>
              <a
                href="#"
                className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
              >
                About
              </a>
              <a
                href="#"
                className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
              >
                Contact
              </a>
            </div>

            <div className="relative mt-4 md:mt-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="material-symbols-outlined text-gray-400">
                  search
                </span>
              </span>

              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Search"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
