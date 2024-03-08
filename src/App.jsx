import Navbar from "./Components/Navbar";
import SearcBox from "./Components/SearchBox";
import "./styles/App.css"

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="container py-5 mx-auto md:flex justify-between">
        <SearcBox />
      </main>
    </div>
  )
}