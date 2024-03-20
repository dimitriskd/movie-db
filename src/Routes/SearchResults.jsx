import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { nanoid } from "nanoid";
import Loading from "../Components/Loading";

export default function SearchResults(props) {
  const [textInputValue, setTextInputValue] = useState("");
    const [movies,setList] = useState(null);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const initializeList = async () => {
            try {
              const response = await axios.get("http://localhost:3000/top-rated");
              const data = response.data.results;
              setList(data);
            } catch (error) {
              console.error(error);
            } finally {
              setLoading(false);
            }
          };
          initializeList();
    },[])

  useEffect(() => {
    setTextInputValue("Initial Value");
  }, []);

  const handleInputChange = (e) => {
    setTextInputValue(e.target.value);
  };

  if (loading) {
    return <Loading />;
  }
  console.log(movies)
  return (
    <section className="">
      <div className="hidden md:block sticky top-0 w-screen dark:bg-base-300 bg-gray-100">
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
      <section className="xl:container mx-auto md:flex items-start gap-8 my-8">
        <div className="md:col-span-3 border border-seashell-700 rounded-md h-fit min-w-64">
          <div className="w-full bg-primary p-5 text-white">
            <h1 className="text-xl">Search Results</h1>
          </div>
          <ul className="py-4 w-full cursor-pointer">
            <li className="selected py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                Movies
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md text-black dark:text-white">800</span>
              </a>
            </li>
            <li className="py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                TV Shows
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md text-black dark:text-white">1</span>
              </a>
            </li>
            <li className="py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                Companies
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md text-black dark:text-white">1</span>
              </a>
            </li>
            <li className="py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                Keywords
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md text-black dark:text-white">1</span>
              </a>
            </li>
            <li className="py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                People
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md text-black dark:text-white">1</span>
              </a>
            </li>
            <li className="py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                Collections
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md text-black dark:text-white">1</span>
              </a>
            </li>
            <li className="py-3 px-5 dark:hover:bg-neutral hover:bg-seashell-200 group">
              <a href="" className="flex justify-between items-center">
                Networks
                <span className="dark:bg-neutral bg-seashell-200 group-hover:bg-base-100 px-3 rounded-md text-black dark:text-white">1</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-9 w-full">
          {movies.map((movie,index) =>{
            const formattedDate = format(movie.release_date || movie.first_air_date, "MMMM dd, yyyy");
            return (
                <div key={nanoid()} className="w-full mb-4 border rounded-md border-seashell-600 flex">
                    <img className="w-24 rounded-s-md" src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
                    <div className="p-4">
                        <div className="mb-4">
                            <h2 className="font-bold">{movie.title}</h2>
                            <span className="text-seashell-700">{formattedDate}</span>
                        </div>
                        <p className="line-clamp-2">{movie.overview}</p>
                    </div>
                </div>
            )
          })}
        </div>
      </section>
    </section>
  );
}
