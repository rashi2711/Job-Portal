import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SearchFilter from './SearchFilter';
import { BriefcaseIcon, StarIcon } from '@heroicons/react/24/solid';

const HomeSeeker = ({ user }) => {
  const [filters, setFilters] = useState({
    search: '',
    skills: '',
    match: 0,
    location: '',
    type: '',
  });
  const sections = useRef([]);

  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', skills: ['React', 'Tailwind'], match: 92, location: 'Remote', type: 'Full-time', image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJvbnRlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D' },
    { id: 2, title: 'Backend Intern', company: 'Data Inc', skills: ['Node.js', 'MongoDB'], match: 85, location: 'New York', type: 'Internship', image: 'https://images.unsplash.com/photo-1667372393053-6e13b226fba6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFja2VuZCUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D' },
  ];

  const reviews = [
    { id: 1, user: 'Alice', comment: 'Landed my dream internship!', rating: 5, image: 'https://images.unsplash.com/photo-1609193077221-d3cc57aa9e76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxpY2UlMjBnaXJsfGVufDB8fDB8fHww' },
    { id: 2, user: 'Bob', comment: 'Amazing platform for freshers.', rating: 4.5, image: 'https://images.unsplash.com/photo-1745249084638-90f4775f30f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJveSUyMGJvYnxlbnwwfHwwfHx8MA%3D%3D' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-section');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchesSkills = !filters.skills || job.skills.some((skill) => skill.toLowerCase().includes(filters.skills.toLowerCase()));
    const matchesMatch = filters.match === 0 || job.match >= parseFloat(filters.match);
    const matchesLocation = !filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesType = !filters.type || job.type === filters.type;
    return matchesSearch && matchesSkills && matchesMatch && matchesLocation && matchesType;
  });

  return (
    <div className="container mx-auto p-8 bg-white dark:bg-black">
      <h1 className="text-5xl font-bold text-center gradient-text mb-12">Find Your Dream Job</h1>
      <div ref={(el) => (sections.current[0] = el)} className="mb-12">
        <SearchFilter filters={filters} onFilterChange={handleFilterChange} type="jobs" />
      </div>
      <div ref={(el) => (sections.current[1] = el)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.map((job) => (
          <Link to={`/job/${job.id}`} key={job.id} className="item-hover p-6 border-b border-gradient">
            <img src={job.image} alt={job.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold text-black dark:text-pink-400">{job.title}</h2>
            <p className="text-black dark:text-pink-400">{job.company}</p>
            <p className="text-black dark:text-pink-400">Skills: {job.skills.join(', ')}</p>
            <p className="text-black dark:text-pink-400">Location: {job.location}</p>
            <p className="text-green-600 dark:text-green-400">Skill Match: {job.match}%</p>
            {user?.role === 'seeker' && (
              <button className="mt-4 inline-flex items-center gradient-button text-white px-6 py-3 rounded-full shadow-glow">
                <BriefcaseIcon className="h-6 w-6 mr-2" />
                Apply Now
              </button>
            )}
          </Link>
        ))}
      </div>
      <div ref={(el) => (sections.current[2] = el)} className="mt-16">
        <h2 className="text-3xl font-bold gradient-text mb-8">User Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="item-hover p-6 border-b border-gradient">
              <img src={review.image} alt={review.user} className="w-20 h-20 rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-black dark:text-pink-400">{review.user}</h3>
              <p className="text-black dark:text-pink-400">{review.comment}</p>
              <div className="flex items-center mt-2">
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <span className="ml-2 text-black dark:text-pink-400">{review.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div ref={(el) => (sections.current[3] = el)} className="mt-16">
        <h2 className="text-3xl font-bold gradient-text mb-8">Upcoming Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/workshop/1" className="item-hover p-6 border-b border-gradient">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              className="w-full h-48 object-cover rounded-lg mb-4"
              autoPlay
              loop
              muted
            />
            <h3 className="text-xl font-semibold text-black dark:text-pink-400">Resume Building Workshop</h3>
            <p className="text-black dark:text-pink-400">Date: 2025-06-01</p>
            <p className="text-black dark:text-pink-400">Learn to craft a winning resume.</p>
          </Link>
          <div className="item-hover p-6 border-b border-gradient">
            <img
              src="https://images.unsplash.com/photo-1646579886135-068c73800308?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaCUyMHdvcmtzaG9wfGVufDB8fDB8fHww"
              alt="Coming Soon"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-black dark:text-pink-400">Interview Prep (Coming Soon)</h3>
            <p className="text-black dark:text-pink-400">Details to be announced.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSeeker;