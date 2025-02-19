import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard'; 
import Calculator from './Calculator'; // Assume you have a Dashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path = "/calculator" element = {<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
