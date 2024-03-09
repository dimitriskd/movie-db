import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header";
import Discover from "./Components/Discover";
import "./styles/App.css"

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="container py-5 mx-auto">
        {/* <Header /> */}
        <Discover />
      </main>
    </div>
  )
}