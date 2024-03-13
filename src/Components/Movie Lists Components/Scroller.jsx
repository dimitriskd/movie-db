import { useState, useEffect, useRef } from "react";
import Loading from "../Loading";
import MovieCard from "../MovieCard";
import gsap from "gsap";
import axios from "axios";

export default function Scroller(props) {
  const [list, setList] = useState(null);
  const [activeTab, setActiveTab] = useState(
    Object.keys(props.category.tabs)[0]
  );
  const [loading, setLoading] = useState(true);
  const containerRef = useRef();
  const toggleRef = useRef();

  useEffect(() => {
    const initializeList = async () => {
      try {
        const response = await axios.request({
          ...props.category.config,
          url: props.category.config.url + "?req=" + activeTab,
        });
        const data = response.data.results;
        setList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    initializeList();
  }, [activeTab]);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1, ease: "sine.inOut" }
    );
  }, [activeTab,loading]);

  const handleTabClick = (tab) => {
    const targetTab = document.querySelector(`.${tab}`);
    if (targetTab) {
      gsap.to(toggleRef.current, {
        duration: 0.3,
        x: targetTab.offsetLeft,
        ease: "power2.inOut",
      });
    }
    setActiveTab(tab);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="py-5">
      <div className="flex items-center">
        <h2 className="text-3xl pl-2 font-semibold flex items-center">
          <span
            className={`material-symbols-outlined mr-2 ${props.category.header.iconColor}`}
          >
            {props.category.header.icon}
          </span>
          {props.category.header.title}
        </h2>
        <div className="flex text-center justify-between items-center border border-persian-blue-600 rounded-full ml-4 relative">
          {Object.entries(props.category.tabs).map(([key, value]) => (
            <span
              key={key}
              className={`${key} rounded-full select-none px-2 py-1 w-24 cursor-pointer z-[1]`}
              onClick={() => handleTabClick(key)}
            >
              {value}
            </span>
          ))}
          <div
            ref={toggleRef}
            className="absolute h-8 bg-gradient-to-r w-24 from-ebony-clay-700 to-persian-blue-600 rounded-full"
          ></div>
        </div>
      </div>
      <div ref={containerRef} className="flex overflow-x-scroll">
        <MovieCard movies={list} />
      </div>
    </section>
  );
}
