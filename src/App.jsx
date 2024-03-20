import "./styles/App.css";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import SearchResults from "./Routes/SearchResults";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  async function logIn(){
    try {
      const response = await axios.get("http://localhost:3000/login");
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="h-screen flex flex-col">
      <nav className="shadow-lg">
        <Navbar loggedIn={loggedIn} />
      </nav>

      <main>
        <Home />
        {/* <SearchResults /> */}
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </section>
  );
}
