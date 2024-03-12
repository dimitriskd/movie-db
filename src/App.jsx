import "./styles/App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Popular from "./Components/Movie Lists Components/Popular";
import Trending from "./Components/Movie Lists Components/Trending";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <section className="h-fit">
      <nav className="shadow-lg">
        <Navbar />
      </nav>

      <main className="xl:container mx-auto">
        <Header />
        <Popular />
        <Trending />
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
