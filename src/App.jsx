import { useEffect, useState } from "react";
import "./styles/App.css";
import { APIContainer } from "./API/tmdb";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

export default function App() {
  
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
    }
    popularMovies();
  },[])

  if (loading) {
    // Render a simple loading screen
    return (
      <div className="loading-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <nav className="shadow-lg">
        <Navbar />
      </nav>
      <main className="">
        <Header movies={popular}/>
      </main>
    </div>
  );
}
