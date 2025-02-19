import { useState } from "react";
import { Input } from "./Input";
import Button from "./Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import {Loading} from "../components/Loading";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (email === "mamamo@gmail.com" && password === "mamamo") {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password.");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#E5D0AC]">
      <div className="w-full max-w-md p-6 bg-[#FF9D23] rounded-md shadow-sm">
        <h2 className="text-2xl font-mono text-center mb-6 text-white font-extrabold">
          Welcome to Carmine's Cave!
        </h2>
        {error && <p className="text-md font-mono font-medium text-[#C14600]">{error}</p>}
        {loading && <Loading text="Logging in..." />}

        <form onSubmit={handleSubmit}>
          <Input
            variant="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <Input
            variant="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />

          <Button variant="login" onClick={() => handleSubmit} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
