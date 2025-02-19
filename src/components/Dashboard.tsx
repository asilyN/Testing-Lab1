import React from "react";
import { useNavigate } from "react-router-dom";
import calculatorImg from "../assets/calculator.png";
import todoListImg from "../assets/todo-list.png";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FEF9E1] p-10">
      <h1 className="text-3xl font-semibold mb-8">Dashboard</h1>
      
      <div className="flex justify-center items-center gap-12">
        {/* Calculator Button */}
        <button 
          className="flex flex-col items-center hover:scale-105 transition-transform"
          onClick={() => navigate("/calculator")}
        >
          <img src={calculatorImg} alt="Calculator" className="w-50 h-50" />
          <p className="mt-2 font-mono text-3xl">Calculator</p>
        </button>
        <button 
          className="hidden"
        ></button>

        {/* To-do List Button */}
        <button 
          onClick={() => window.location.href = "/src/activity1-main/activity1-main/index.html"} 
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <img src={todoListImg} alt="To-do List" className="w-50 h-50" />
          <p className="mt-2 font-mono text-3xl">To-Do List</p>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
