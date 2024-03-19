import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo/logo-dark/svg/logo-no-background.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { username, password });
      const { apiKey } = response.data; // Assuming the API returns the API key
      setApiKey(apiKey);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col w-80 h-screen justify-center items-center mx-auto gap-4">
      <img className="w-3/4" src={logo} alt="" />
      <input
        className="input input-primary"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input input-primary"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <a href="https://www.themoviedb.org/signup">Create Account</a>
      <button className="btn btn-outline outline-primary" onClick={handleLogin}>
        Login
      </button>
      {apiKey && <p>API Key: {apiKey}</p>}
    </div>
  );
};

export default Login;
