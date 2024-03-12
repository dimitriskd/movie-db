import { useState, useEffect, useRef } from "react";
import axios from "axios";
import MovieCard from "../MovieCard";
import gsap from "gsap";

export default function Trending() {
  const [trending, setTrending] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("day");
  const toggleRef = useRef();
  const containerRef = useRef();
  
  useEffect(() => {
    const popularMovies = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/trending?req=${activeTab}`)
        const data = response.data.results;
        setTrending(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    popularMovies();
  }, [activeTab]);
  
  useEffect(() => {
    gsap.fromTo(containerRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: "sine.inOut" });
  }, [trending]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    activeTab === "day"
      ? gsap.to(toggleRef.current, { x: "100%", duration: 0.5 })
      : gsap.to(toggleRef.current, { x: "0", duration: 0.5 });
  };

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
      <div className="flex items-center">
        <h2 className="text-3xl pl-2 font-semibold flex items-center">
          <span className="material-symbols-outlined text-persian-blue-700 mr-2">
            trending_up
          </span>
          Trending
        </h2>
        <div className="flex text-center justify-between items-center border border-persian-blue-600 rounded-full ml-4 relative">
          <span
            className="day rounded-full select-none px-2 py-1 w-14 cursor-pointer z-[1]"
            onClick={() => handleTabClick("day")}
          >
            Day
          </span>
          <span
            className="week rounded-full select-none px-2 py-1 w-14 cursor-pointer z-[1]"
            onClick={() => handleTabClick("week")}
          >
            Week
          </span>
          <div
            ref={toggleRef}
            className="absolute h-8 bg-gradient-to-r w-14 from-ebony-clay-700 to-persian-blue-600 rounded-full"
          ></div>
        </div>
      </div>
      <div ref={containerRef} className="flex overflow-x-scroll">
        <MovieCard movies={trending} />
      </div>
    </section>
  );
}
