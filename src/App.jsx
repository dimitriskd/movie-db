import "./styles/App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Popular from "./Components/Movie Lists Components/Popular";
import Trending from "./Components/Movie Lists Components/Trending";
import Footer from "./Components/Footer";
import Scroller from "./Components/Movie Lists Components/Scroller";
import { useEffect, useState } from "react";

export default function App() {
  const [trending, setTrending] = useState({
    config: {
      method: "GET",
      url: `http://localhost:8000/trending`,
    },
    tabs: {
      day: "Today",
      week: "This Week",
    },
    header: {
      title: "Trending",
      icon: "trending_up",
      iconColor: "text-persian-blue-700",
    },
  });
  const [popular, setPopular] = useState({
    config: {
      method: "GET",
      url: `http://localhost:8000/popular`,
    },
    tabs: {
      movie: "Movies",
      tv: "TV Shows",
    },
    header: {
      title: "Popular",
      icon: "stars",
      iconColor: "text-yellow-400",
    },
  });

  return (
    <section className="h-fit">
      <nav className="shadow-lg">
        <Navbar />
      </nav>

      <main className="xl:container mx-auto">
        <Header />
        <Scroller category={trending} />
        <Scroller category={popular} />
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
