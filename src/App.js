import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './pages/Home';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className="content" style={{ marginLeft: '250px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
