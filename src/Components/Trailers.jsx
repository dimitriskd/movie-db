import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { nanoid } from "nanoid";
import Loading from "./Loading";
import ModalPlayer from "./ModalPlayer";

export default function Trailers() {
  const [trailers, setTrailers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoverBg, setHoverBg] = useState(null);
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  useEffect(() => {
    const initializeTrailers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/upcoming/trailers"
        );
        const trailersData = response.data;
        setTrailers(trailersData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    initializeTrailers();
  }, []);

  useEffect(() => {
    trailers && setHoverBg(trailers[0].movie.backdrop_path);
  }, [loading]);

  function handlePlay(trailer) {
    setSelectedTrailer(trailer);
    document.body.style.overflow = "hidden";
  }

  function handleClose() {
    setSelectedTrailer(null);
    document.body.style.overflow = "auto";
  }

  if (loading) {
    return <Loading />;
  }

  const bg = {
    backgroundImage: `url(http://image.tmdb.org/t/p/original${hoverBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="my-5">
      <h2 className="flex pl-1 mb-2 text-3xl font-semibold items-center">
        <span className="material-symbols-outlined filled mr-2 text-red-600">
          play_circle
        </span>
        Latest Trailers
      </h2>
      <div style={bg} className="flex flex-col">
        <div className="flex bg-primary py-2 bg-opacity-50  overflow-x-scroll">
          {trailers.map((trailer) => {
            const key = nanoid();
            return (
              <div className="flex flex-col min-w-80 h-fit m-2 px-5 py-4" key={key}>
                <div className="transition-all ease-in-out duration-200">
                  <div
                    onClick={() => handlePlay(trailer)}
                    className="relative flex justify-center items-center img-animation cursor-pointer group"
                    onMouseEnter={() => setHoverBg(trailer.movie.backdrop_path)}
                  >
                    <img
                      src={`http://image.tmdb.org/t/p/w500${trailer.movie.backdrop_path}`}
                      className="rounded-md"
                      alt={trailer.movie.title}
                    />
                    <span className="material-symbols-outlined filled absolute text-7xl text-white play-animation">
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="text-center my-2 text-white">
                  <a href="#" className="font-semibold">
                    {trailer.movie.title}
                  </a>
                  <p className="line-clamp-1">{trailer.trailers[0].name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedTrailer && (
        <ModalPlayer
          video={selectedTrailer.trailers[0]}
          handleClose={handleClose}
        />
      )}
    </section>
  );
}
