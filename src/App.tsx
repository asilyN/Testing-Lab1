import { useState } from "react";
import { Input } from "./components/Input";
import React from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (email === "carmine@tuden.com" && password === "carmine123") {
      alert("Login successful!");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#E5D0AC]">
      <div className="w-full max-w-md p-6 bg-[#FF9D23] rounded-md shadow-sm">
        <h2 className="text-2xl font-mono text-center mb-6 text-white font-extrabold">Welcome to Carmine's Cave!</h2>
        {error && <p className="text-red-500 text-center mb-4 bg-white">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <Input
            variant="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Input
            variant="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button
            type="submit"
            className="w-full py-2 mt-4 font-mono bg-[#C14600] text-white rounded-lg hover:bg-[#c13d00] focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
