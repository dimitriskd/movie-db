import Navbar from "./Components/Navbar";
import SearcBox from "./Components/SearchBox";
import "./styles/App.css"

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto 2xl:w-9/12 ">
        <SearcBox />
      </main>
    </div>
  )
}