import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import Sidebar from './components/Sidebar';
import HomeSeeker from './components/HomeSeeker';
import HomeRecruiter from './components/HomeRecruiter';
import Login from './components/Login';
import Register from './components/Register';
import DashboardSeeker from './components/DashboardSeeker';
import DashboardRecruiter from './components/DashboardRecruiter';
import Profile from './components/Profile';
import JobDetails from './components/JobDetails';
import CandidateDetails from './components/CandidateDetails';
import WorkshopDetails from './components/WorkshopDetails';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    document.documentElement.classList.toggle('dark');
  };

  const handleLogin = (userData) => {
    const updatedUser = { ...userData, darkMode };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <Router>
      <div className={`min-h-screen bg-white dark:bg-black transition-colors duration-300 flex flex-col font-['Poppins']`}>
        {/* Sticky Navbar */}
        <nav className={`sticky top-0 bg-white dark:bg-black p-4 shadow-lg z-30 glass-effect border-b border-gradient`}>
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold text-black dark:text-pink-400">JobPlatform</Link>
            <div className="flex space-x-6 items-center">
              {user ? (
                <>
                  <span className="text-lg text-black dark:text-pink-400">{user.username} ({user.role})</span>
                  <button onClick={handleLogout} className="text-lg text-black dark:text-pink-400">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-lg text-black dark:text-pink-400">Login</Link>
                  <Link to="/register" className="text-lg text-black dark:text-pink-400">Register</Link>
                </>
              )}
              <button onClick={toggleDarkMode} className="p-2 rounded-full gradient-button shadow-glow">
                {darkMode ? <SunIcon className="h-8 w-8 text-white" /> : <MoonIcon className="h-8 w-8 text-white" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content with Sidebar */}
        <div className="flex flex-1 pt-8">
          {user && <Sidebar user={user} setUser={setUser} />}
          <div className={`flex-1 overflow-y-auto ${user ? 'ml-56' : ''} p-8`}>
            <Routes>
              <Route path="/" element={user?.role === 'seeker' ? <HomeSeeker user={user} /> : user?.role === 'recruiter' ? <HomeRecruiter user={user} /> : <HomeSeeker user={user} />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register onRegister={handleLogin} />} />
              <Route path="/dashboard/seeker" element={<DashboardSeeker user={user} />} />
              <Route path="/dashboard/recruiter" element={<DashboardRecruiter user={user} />} />
              <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
              <Route path="/job/:id" element={<JobDetails user={user} />} />
              <Route path="/candidate/:id" element={<CandidateDetails user={user} />} />
              <Route path="/workshop/:id" element={<WorkshopDetails />} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white dark:bg-black text-black dark:text-pink-400 p-6 glass-effect shadow-lg border-t border-gradient">
          <div className="container mx-auto text-center">
            <p className="text-lg">© 2025 JobPlatform. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;