import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchFilter from './SearchFilter';
import { BriefcaseIcon, StarIcon } from '@heroicons/react/24/solid';

const Home = ({ user }) => {
  const [view, setView] = useState('jobs'); // 'jobs' or 'employees'
  const [filters, setFilters] = useState({
    search: '',
    skills: '',
    match: 0,
    rating: 0,
  });

  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', skills: ['React', 'Tailwind'], match: 92, image: 'https://source.unsplash.com/random/400x300?tech' },
    { id: 2, title: 'Backend Intern', company: 'Data Inc', skills: ['Node.js', 'MongoDB'], match: 85, image: 'https://source.unsplash.com/random/400x300?coding' },
  ];

  const employees = [
    { id: 1, name: 'John Doe', skills: ['React', 'Node.js'], rating: 4.5 },
    { id: 2, name: 'Jane Smith', skills: ['Python', 'Django'], rating: 4.8 },
  ];

  const reviews = [
    { id: 1, user: 'Alice', comment: 'Found my dream job!', rating: 5, image: 'https://source.unsplash.com/random/100x100?person1' },
    { id: 2, user: 'Bob', comment: 'Great platform for hiring!', rating: 4.5, image: 'https://source.unsplash.com/random/100x100?person2' },
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchesSkills = !filters.skills || job.skills.some((skill) => skill.toLowerCase().includes(filters.skills.toLowerCase()));
    const matchesMatch = filters.match === 0 || job.match >= parseFloat(filters.match);
    return matchesSearch && matchesSkills && matchesMatch;
  });

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesSkills = !filters.skills || employee.skills.some((skill) => skill.toLowerCase().includes(filters.skills.toLowerCase()));
    const matchesRating = filters.rating === 0 || employee.rating >= parseFloat(filters.rating);
    return matchesSearch && matchesSkills && matchesRating;
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center gradient-text mb-8">Welcome to JobPlatform</h1>
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setView('jobs')}
          className={`px-4 py-2 rounded-l-lg ${view === 'jobs' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          Find Jobs
        </button>
        <button
          onClick={() => setView('employees')}
          className={`px-4 py-2 rounded-r-lg ${view === 'employees' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          Find Employees
        </button>
      </div>
      <SearchFilter filters={filters} onFilterChange={handleFilterChange} type={view} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {view === 'jobs' ? (
          filteredJobs.map((job) => (
            <Link to={`/job/${job.id}`} key={job.id}>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg card-hover glass-effect">
                <img src={job.image} alt={job.title} className="w-full h-40 object-cover rounded mb-4" />
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
                <p className="text-gray-600 dark:text-gray-300">Skills: {job.skills.join(', ')}</p>
                <p className="text-green-500">Skill Match: {job.match}%</p>
                {user?.role === 'seeker' && (
                  <button className="mt-4 inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    <BriefcaseIcon className="h-5 w-5 mr-2" />
                    Apply Now
                  </button>
                )}
              </div>
            </Link>
          ))
        ) : (
          filteredEmployees.map((employee) => (
            <div key={employee.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg card-hover glass-effect">
              <img src="https://source.unsplash.com/random/400x300?person" alt={employee.name} className="w-full h-40 object-cover rounded mb-4" />
              <h2 className="text-xl font-semibold">{employee.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">Skills: {employee.skills.join(', ')}</p>
              <div className="flex items-center mt-2">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="ml-1">{employee.rating}</span>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold gradient-text mb-6">User Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg card-hover glass-effect">
              <img src={review.image} alt={review.user} className="w-16 h-16 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{review.user}</h3>
              <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
              <div className="flex items-center mt-2">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="ml-1">{review.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold gradient-text mb-6">Upcoming Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/workshop/1">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg card-hover glass-effect">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                className="w-full h-40 object-cover rounded mb-4"
                autoPlay
                loop
                muted
              />
              <h3 className="text-xl font-semibold">Resume Building Workshop</h3>
              <p className="text-gray-600 dark:text-gray-300">Date: 2025-06-01</p>
              <p className="text-gray-600 dark:text-gray-300">Learn to craft a winning resume.</p>
            </div>
          </Link>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg card-hover glass-effect">
            <img
              src="https://source.unsplash.com/random/400x300?workshop"
              alt="Coming Soon"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">Interview Prep (Coming Soon)</h3>
            <p className="text-gray-600 dark:text-gray-300">Details to be announced.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;