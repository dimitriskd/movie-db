import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";

export default function MovieCard({ movies }) {
  const [movieCards, setMovieCards] = useState([]);

  useEffect(() => {
    createCard();
  }, [movies]);

  function createCard() {
    const movieList = movies.map((movie) => {
      const rating = Number(movie.vote_average.toFixed(1));
      const formattedDate = format(movie.release_date, "MMM dd, yyyy");
      return {
        id: movie.id,
        poster_img: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
        title: movie.title,
        rating: rating,
        release_date: formattedDate,
        popularity: movie.popularity,
      };
    });
    setMovieCards(movieList);
  }

  const fill = { "font-variation-settings": "'FILL' 1" };

  return movieCards.map(({ id, poster_img, title, release_date, rating }) => {
    return (
      <div
        key={id}
        className="min-w-fit min-h-fit text-white mr-4 my-2 px-2 overflow-hidden relative md:static"
      >
        <a href="#">
          <div className="md:w-48 w-36 relative hover:scale-105 transition-all duration-150 ease-in-out py-2">
            <img src={poster_img} className="rounded-lg" alt={title} />
            <div className="absolute top-3 right-1 flex items-center bg-seashell-700 md:px-2 md:py-1 px-1 rounded-lg bg-opacity-80">
              <span>{rating}</span>
              <span className="text-gray-300">/10</span>
            </div>
          </div>
        </a>
        <div className="py-2 md:flex justify-between items-center md:w-48 w-36">
          <span className="w-3/4">
            <a
              className="w-fit hover:text-persian-blue-700 text-black dark:text-white font-semibold transition-all ease-in-out duration-300"
              href="#"
            >
              {title}
            </a>
            <p className="text-gray-700 dark:text-gray-300">{release_date}</p>
          </span>
          <div className="dropdown md:dropdown-end md:dropdown-top md:relative absolute top-3 left-3 md:top-auto md:left-auto">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-sm border border-seashell-700 dark:border-seashell-400 focus:bg-persian-blue-700 hover:border-persian-blue-700 "
            >
              <span className="material-symbols-outlined">more_horiz</span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu md:p-2 shadow bg-base-100 rounded-box w-32 md:w-44 border border-gray-500 "
            >
              <li>
                <a className="text-black dark:text-white p-1 py-2">
                  <span className="material-symbols-outlined">list</span>
                  <p>Add to list</p>
                </a>
              </li>
              <li>
                <a className="text-black dark:text-white p-1 py-2">
                  <span className="material-symbols-outlined">
                    bookmark_add
                  </span>
                  <p>Watchlist</p>
                </a>
              </li>
              <li>
                <a className="text-black dark:text-white p-1 py-2">
                  <span className="material-symbols-outlined text-red-600">
                    favorite
                  </span>
                  <p>Favorite</p>
                </a>
              </li>
              <li>
                <a className="text-black dark:text-white p-1 py-2">
                  <span className="material-symbols-outlined text-yellow-400">
                    star
                  </span>
                  <p>Add Rating</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  });
}
