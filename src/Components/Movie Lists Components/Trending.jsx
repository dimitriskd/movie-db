import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import { APIContainer } from "../../API/tmdb";
import { useSpring, animated } from "@react-spring/web";

export default function Trending() {
  const [trending, setTrending] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("day");
  const springProps = useSpring({
    from: { left: activeTab === "day" ? "0%" : "50%", width: "50%" },
    to: { left: activeTab === "day" ? "0%" : "50%", width: "50%" },
    config: { tension: 400, friction: 20 },
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const popularMovies = async () => {
      try {
        const response = await APIContainer.fetch_trending(activeTab);
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
            className="rounded-full select-none px-2 py-1 w-14 cursor-pointer z-[1]"
            onClick={() => handleTabClick("day")}
          >
            Day
          </span>
          <span
            className="rounded-full select-none px-2 py-1 w-14 cursor-pointer z-[1]"
            onClick={() => handleTabClick("week")}
          >
            Week
          </span>
          <animated.div
            className="absolute h-8 bg-gradient-to-r w-14 from-ebony-clay-700 to-persian-blue-600 rounded-full"
            style={{
              ...springProps,
            }}
          ></animated.div>
        </div>
      </div>
      <div className="flex overflow-x-scroll">
        <MovieCard movies={trending} />
      </div>
    </section>
  );
}
