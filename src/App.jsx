import "./styles/App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Scroller from "./Components/Scroller";
import axios from "axios";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [flag, setFlag] = useState(false);

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
  
  function handleInputChange(e){
    const query = e.target.value;
    setSearchQuery(query);
    console.log(searchQuery);
  }
  async function handleFlag() {
    try {
      const response = await axios.get(`http://localhost:3000/search?query=${searchQuery}`, {
        timeout: 5000 // Timeout in milliseconds (adjust as needed)
      });
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
    setFlag(!flag)
  }
  

  return (
    <section className="h-screen flex flex-col">
      <nav className="shadow-lg">
        <Navbar />
      </nav>

      <main className="xl:container mx-auto">
        {!flag ? <section>
          <Header query={searchQuery} handleInputChange={handleInputChange} handleFlag={handleFlag} />
          <Scroller category={trending} />
          <Scroller category={popular} />
          <Scroller category={topRated} />
        </section>
        :
        <section>
          {searchQuery}
        </section>}
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </section>
  );
}
