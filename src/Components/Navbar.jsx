import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo/logo-line/svg/logo-no-background.svg";
import logo_dark from "../assets/logo/logo-dark/svg/logo-no-background.svg";
import { themeChange } from "theme-change";

export default function Navbar({loggedIn}) {
  const [mobileSearch, setMobileSearch] = useState(false);
  const buttonRef = useRef(null);

  const handleThemeChange = () => {
    if (buttonRef.current) buttonRef.current.click();
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    themeChange(false);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <div className="navbar-start flex">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <span className="material-symbols-outlined">menu</span>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-lg border border-gray-500 bg-base-100 rounded-box w-52"
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
                Theme Mode
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller"
                  onChange={handleThemeChange}
                />
              </label>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <a href="">
            <img
              className="hidden dark:block h-6 md:h-8"
              src={logo_dark}
              alt="movie-db logo"
            />
            <img className="block dark:hidden h-8" src={logo} alt="" />
          </a>
        </div>
      </div>
      <div className="hidden lg:block navbar-center">
        <a href="">
          <img
            className="hidden dark:block h-6 md:h-8"
            src={logo_dark}
            alt="movie-db logo"
          />
          <img className="block dark:hidden h-8" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-end">
        {/* Search Bar Desktop */}
        <div className="mr-3 hidden md:flex items-center border border-seashell-700 rounded-full">
          <button className="btn btn-ghost btn-circle">
            <span className="material-symbols-outlined">search</span>
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="ml-1 py-1 focus:outline-none outline-none focus:border-none bg-transparent"
            disabled={isSmallScreen}
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
            } transition-all ease-in-out duration-300 flex absolute top-0 left-0 w-full justify-between bg-seashell-900 z-50 shadow-lg`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-6 indent-3 text-xl bg-transparent focus:outline-none"
            />
            <button
              onClick={() => setMobileSearch(!mobileSearch)}
              className="py-2 px-3"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
        {loggedIn ? <div className="dropdown dropdown-end">
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
        :
        <button className="btn text-white bg-primary hover:bg-neutral" alt="Log In">
          Log In
        </button>
        }
      </div>
    </div>
  );
}
