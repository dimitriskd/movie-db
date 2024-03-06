import Navbar from "./Components/Navbar";
import SearcBox from "./Components/SearchBox";
import "./styles/App.css"

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto">
        <SearcBox />
      </main>
    </div>
  )
}
