import "./styles/App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Scroller from "./Components/Scroller";
import { useEffect, useState } from "react";

export default function App() {
  const generateCategoryState = (url, tabs, title, icon, iconColor) => ({
    config: {
      method: "GET",
      url: `http://localhost:3000/${url}`,
    },
    tabs: tabs,
    header: {
      title: title,
      icon: icon,
      iconColor: iconColor,
    },
  });

  const [trending, setTrending] = useState(
    generateCategoryState("trending", {
      day: "Today",
      week: "This Week",
    }, "Trending", "trending_up", "text-persian-blue-700")
  );

  const [popular, setPopular] = useState(
    generateCategoryState("popular", {
      movie: "Movies",
      tv: "TV Shows",
    }, "Popular", "stars", "text-yellow-400")
  );

  const [topRated, setTopRated] = useState(
    generateCategoryState("top-rated", {}, "Top Rated", "diamond", "text-blue-400")
  );


  return (
    <section className="h-fit">
      <nav className="shadow-lg">
        <Navbar />
      </nav>

      <main className="xl:container mx-auto">
        <Header />
        <Scroller category={trending} />
        <Scroller category={popular} />
        <Scroller category={topRated} />
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
