import { useState, useEffect } from "react";
import { APIContainer } from "../API/tmdb";
import { format } from "date-fns";

export default function Discover() {
  const [nowPlaying, setNowPlaying] = useState(fetchNowPlaying);

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  async function fetchNowPlaying() {
    try {
      const response = await APIContainer.nowPlaying();
      setNowPlaying(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="mx-1">
      {nowPlaying.length > 0 ? <Card movies={nowPlaying} /> : <p>Loading...</p>}
    </div>
  );
}

function Card(props) {
  console.log(props);
  const currentDate = props.movies[0].release_date;
  const formattedDate = format(currentDate, "MMM dd, yyyy");
  const rating = Math.round(props.movies[0].vote_average * 10) + "%";

  return (
    <div>
      <div className="relative w-fit">
        <img
          src={`http://image.tmdb.org/t/p/w500${props.movies[0].poster_path}`}
          className="h-52 md:h-72"
          alt="movie poster"
        />
        <button className="absolute top-1 right-1 rounded-full h-6 w-6 text-white bg-[rgba(255,255,255,0.5)]">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
        <RatingCircle rating={rating} />
        <span>{rating}</span>
      </div>
      <div>
        <p>{props.movies[0].original_title}</p>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}


const RatingCircle = ({ rating }) => {
    const borderStyle = {borderTopColor: '#3490dc', borderBottomColor: "#3490dc"};
  
    return (
      <span
        className={`inline-block h-8 w-8 border-4 border-gray-300 rounded-full relative`}
        style={{
          transform: 'rotate(-45deg)',
          ...borderStyle
        }}
      >
        <span
          className="absolute top-0 left-0 h-full w-full border-4 border-blue-600 rounded-full"
          style={{
            transform: 'scale(1.3)',
          }}
        ></span>
      </span>
    );
  };