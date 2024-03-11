
import { useEffect, useState } from "react";

export default function Header(props) {
  console.log(props.movies)
  
  function getBg() {
    const rand_number = Math.floor(Math.random() * 20 + 1);
    const randomBg = props.movies[rand_number].backdrop_path;
    return randomBg;
  }

  const style = {
    backgroundImage: `url(http://image.tmdb.org/t/p/original/${getBg()})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  };

  return (
    <section style={style} className="mx-auto md:flex justify-between ">
      <div className="w-full py-5 bg-persian-blue-700 bg-opacity-40">
        <div className="container mx-auto px-10 py-10 md:w-2/3">
          <div className="py-10">
            <h1 className="font-bold text-4xl">Welcome to Movie-DB</h1>
            <p className="text-2xl">Source for all your favorite Movies, TV shows and more...</p>
          </div>
          <div className="w-full flex rounded-full border border-seashell-500 focus-within:ring focus-within:ring-ebony-clay-600 bg-white">
            <input className="w-full bg-transparent focus:outline-none indent-5 " type="text" />
            <button className="btn btn-ghost rounded-full bg-persian-blue-700">
              <span className="material-symbols-outlined">search</span>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
