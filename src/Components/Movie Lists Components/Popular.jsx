import { useState, useEffect, useRef } from "react";
import MovieCard from "../MovieCard";
import gsap from "gsap";
import axios from "axios";

export default function Popular() {
  const [popular, setPopular] = useState(null);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    const popularMovies = async () => {
      try {
        const response = await axios.get("http://localhost:8000/popular");
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

  useEffect(() => {
    gsap.fromTo(containerRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: "sine.inOut" });
  }, [popular]);

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
      <div ref={containerRef} className="flex overflow-x-scroll">
        <MovieCard movies={popular} />
      </div>
    </section>
  );
}
