import "./styles/App.css";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import SearchResults from "./Routes/SearchResults";

export default function App() {
  
  return (
    <section className="h-screen flex flex-col">
      <nav className="shadow-lg">
        <Navbar />
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
