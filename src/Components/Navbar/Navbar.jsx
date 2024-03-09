import { useState, useEffect, useRef } from "react";
import ProfileMenu from "./ProfileMenu";
import logo from "/logo-no-background.svg";
import logo_round from "/logo-no-background-round.svg";
 
export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const menuRef = useRef(null);

  const handleOutsideClick = (e) =>{
    if(menuRef.current && !menuRef.current.contains(e.target)){
      setIsOpenProfile(false);
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  },[])

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-2 mx-auto md:flex justify-between">
        <div className="flex items-center justify-between md:mr-4">
          {/* Logo */}
          <a href="#">
            <img className="hidden lg:block h-7" src={logo} alt="Movie-DB" />
            <img
              className="block lg:hidden h-12"
              src={logo_round}
              alt="Movie-DB"
            />
          </a>

          {/* Mobile menu button */}
          <div className="flex md:hidden transition-all ease-in duration-200">
            <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              type="button"
              className="flex text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {/* Open Icon */}
              <span
                className={`${
                  !isOpenMenu ? "block" : "hidden"
                } material-symbols-outlined`}
              >
                menu
              </span>

              {/* Close Icon */}
              <span
                className={`${
                  isOpenMenu ? "block" : "hidden"
                } material-symbols-outlined`}
              >
                close
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "opacity", Menu closed: "hidden" */}
        <div
          className={`${
            isOpenMenu
              ? "translate-x-0 opacity-100"
              : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 shadow-md transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:flex md:translate-x-0 md:items-center md:justify-between md:shadow-none`}
        >
          {/* Search Bar */}
          <div className="relative w-full mt-4 md:mt-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="material-symbols-outlined text-gray-400">
                search
              </span>
            </span>

            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-persian-blue-700 dark:focus:border-persian-blue-700 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-ebony-clay-600"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:py-0">
            <div className="md:flex justify-center md:mx-2">
              <a
                href="#"
                className="flex items-center px-2.5 py-1 my-2 md:my-0 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
              >
                About
              </a>
              <a
                href="#"
                className="flex items-center px-2.5 py-1 my-2 md:my-0 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
              >
                Contact
              </a>
            </div>
            <div className="flex">
              <ProfileMenu menuRef={menuRef} isOpenProfile={isOpenProfile} setIsOpenProfile={setIsOpenProfile} />
              <div className="relative inline-block px-2.5 py-1 w-32">
                <button className="relative z-10 flex justify-center items-center px-2 py-1 border-2 rounded-md border-gray-300 bg-persian-blue-700 text-white">
                  Sign In
                  <span className="material-symbols-outlined ml-2">person</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
