import "./styles/App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import SearchResults from "./Routes/SearchResults";
import Loading from "./Components/Loading";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLog = async () => {
      try {
        const response = await axios.get("http://localhost:3000/check-auth", {
          withCredentials: true,
        });
        if (response.data) {
          setLoggedIn(true);
          try {
            const response = await axios.get("http://localhost:3000/account");
            const accountInfo = response.data;
            setAccount(accountInfo);
          } catch (error) {
            console.error(error);
          }
        }
      } catch (error) {
        console.error("Not Logged In.");
      } finally {
        setLoading(false);
      }
    };
    checkLog();
  }, []);
  
  async function login() {
    try {
      // Redirect the user to the TMDB website to approve the request
      const redirectUrl = `http://localhost:3000/authenticate`;
      window.location.href = redirectUrl;
    } catch (error) {
      console.log(error);
      alert("An error occurred while attempting to log in. Please try again.");
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="h-screen flex flex-col">
      <nav className="shadow-lg">
        <Navbar loggedIn={loggedIn} logIn={login} account={account} />
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
