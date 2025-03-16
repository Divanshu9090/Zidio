import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import Home from './pages/Home';
import AllTasks from './pages/AllTasks';
import Completed from './pages/Completed';
import InProgress from './pages/InProgress';
import Pending from './pages/Pending';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/all-tasks" element={<AllTasks />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/in-progress" element={<InProgress />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/add-task" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
