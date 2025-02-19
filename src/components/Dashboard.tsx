import React from "react";
import { useNavigate } from "react-router-dom";
import calculatorImg from "../assets/calculator.png";
import todoListImg from "../assets/todo-list.png";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-semibold mb-8">Dashboard</h1>
      
      <div className="flex justify-center items-center gap-12">
        {/* Calculator Button */}
        <button 
          onClick={() => navigate("/calculator")} 
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <img src={calculatorImg} alt="Calculator" className="w-24 h-24" />
          <p className="mt-2 text-sm">Calculator</p>
        </button>

        {/* To-do List Button */}
        <button 
          onClick={() => navigate("/todolist")} 
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <img src={todoListImg} alt="To-do List" className="w-24 h-24" />
          <p className="mt-2 text-sm">Todolist</p>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
