import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import { APIContainer } from "../../API/tmdb";

export default function Popular() {
  const [popular, setPopular] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const popularMovies = async () => {
      try {
        const response = await APIContainer.fetch_popular();
        const data = response.data.results;
        setPopular(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    popularMovies();
  }, []);

  if (loading) {
    // Render a simple loading screen
    return (
      <div className="loading-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section className="py-5">
      <h2 className="text-3xl pl-2 font-semibold flex items-center">
        <span className="material-symbols-outlined text-yellow-400 mr-2">stars</span>Popular
      </h2>
      <div className="flex overflow-x-scroll">
        <MovieCard movies={popular} />
      </div>
    </section>
  );
}
