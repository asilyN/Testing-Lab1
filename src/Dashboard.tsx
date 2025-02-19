import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Welcome to the Dashboard
        </h2>
        <p className="text-center">You are logged in!</p>
      </div>
    </div>
  );
};

export default Dashboard;