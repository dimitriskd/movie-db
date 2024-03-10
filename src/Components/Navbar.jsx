import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo/logo-line/svg/logo-no-background.svg";
import logo_dark from "../assets/logo/logo-dark/svg/logo-no-background.svg";
import { themeChange } from "theme-change";
themeChange();

export default function Navbar() {
  const [mobileSearch, setMobileSearch] = useState(false);
  const buttonRef = useRef(null);

  const handleThemeChange = () => {
    if (buttonRef.current) buttonRef.current.click();
  };

  return (
    <div className="navbar bg-base-100 container py-3 mx-auto md:flex">
      {/* Hidden button that uses theme-change to change theme in local storaget. it uses useRef hook so when the toggle switch is pressed its clicked too */}
      <button
        ref={buttonRef}
        className="hidden"
        data-toggle-theme="dark,light"
        data-act-classname="ACTIVECLASS"
      >
        Theme
      </button>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <span className="material-symbols-outlined">menu</span>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <label className="flex cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller"
                  onChange={handleThemeChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img className="hidden dark:block h-8" src={logo_dark} alt="movie-db logo" />
        <img className="block dark:hidden h-8" src={logo} alt="" />
      </div>
      <div className="navbar-end">
        {/* Search Bar Desktop */}
        <div className="mr-3 hidden md:flex items-center border border-seashell-700 rounded-full p-2">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="Search..."
            className="ml-1 py-1 focus:outline-none outline-none focus:border-none bg-transparent"
          />
        </div>
        {/* Search Bar Mobile*/}
        <div className="md:hidden">
          <button
            onClick={() => setMobileSearch(!mobileSearch)}
            className="btn btn-ghost btn-circle"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <div
            className={`${
              mobileSearch
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full"
            } transition-all ease-in-out duration-300 flex absolute top-0 left-0 w-full justify-between bg-slate-600 z-50 shadow-lg`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-5 indent-3 text-xl bg-transparent focus:outline-none"
            />
            <button
              onClick={() => setMobileSearch(!mobileSearch)}
              className="py-2 px-3"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
