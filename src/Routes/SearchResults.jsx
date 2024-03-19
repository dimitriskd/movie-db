import { useState, useEffect } from "react";

export default function SearchResults(props) {
  const [textInputValue, setTextInputValue] = useState("");

  useEffect(() => {
    setTextInputValue("Initial Value");
  }, []);

  const handleInputChange = (e) => {
    setTextInputValue(e.target.value);
  };

  return (
    <section className="">
      <div className="hidden md:block sticky md:-ml-20 top-0 w-screen dark:bg-base-300 bg-gray-100">
        <div className="container mx-auto dark:text-white flex items-center">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            value={textInputValue}
            onChange={handleInputChange}
            className="w-full ml-2 py-3 bg-transparent outline-none"
          />
        </div>
      </div>
      <section className="md:grid md:grid-cols-12 gap-8 my-8">
        <div className="md:col-span-3 border border-seashell-700 rounded-md">
          <div className="w-full bg-primary p-5 text-white">
            <h1 className="text-xl">Search Results</h1>
          </div>
          <ul className="py-4 w-full cursor-pointer">
            <li className="selected py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                Movies
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md">800</span>
              </a>
            </li>
            <li className="selected py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                TV Shows
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md">1</span>
              </a>
            </li>
            <li className="selected py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                Companies
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md">1</span>
              </a>
            </li>
            <li className="selected py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                Keywords
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md">1</span>
              </a>
            </li>
            <li className="selected py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                People
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md">1</span>
              </a>
            </li>
            <li className="selected py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                Collections
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md">1</span>
              </a>
            </li>
            <li className="selected py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                Networks
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md">1</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-9">
          <h1>MOVIES</h1>
        </div>
      </section>
    </section>
  );
}
