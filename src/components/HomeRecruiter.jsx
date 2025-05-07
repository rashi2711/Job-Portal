import { useState, useEffect, useRef } from 'react';
import SearchFilter from './SearchFilter';
import { StarIcon } from '@heroicons/react/24/solid';

const HomeRecruiter = ({ user }) => {
  const [filters, setFilters] = useState({
    search: '',
    skills: '',
    rating: 0,
    location: '',
  });
  const sections = useRef([]);

  const candidates = [
    { id: 1, name: 'John Doe', skills: ['React', 'Node.js'], rating: 4.5, location: 'Remote', resume: 'John resume content...', image: 'https://plus.unsplash.com/premium_photo-1690579805307-7ec030c75543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8' },
    { id: 2, name: 'Jane Smith', skills: ['Python', 'Django'], rating: 4.8, location: 'New York', resume: 'Jane resume content...', image: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww' },
  ];

  const reviews = [
    { id: 1, user: 'Tech Corp', comment: 'Hired top talent quickly!', rating: 5, image: 'https://winzons.com/wp-content/uploads/2024/06/Frontend-Developer.jpg' },
    { id: 2, user: 'Data Inc', comment: 'Great candidate pool.', rating: 4.5, image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D' },
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

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch = candidate.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesSkills = !filters.skills || candidate.skills.some((skill) => skill.toLowerCase().includes(filters.skills.toLowerCase()));
    const matchesRating = filters.rating === 0 || candidate.rating >= parseFloat(filters.rating);
    const matchesLocation = !filters.location || candidate.location.toLowerCase().includes(filters.location.toLowerCase());
    return matchesSearch && matchesSkills && matchesRating && matchesLocation;
  });

  return (
    <div className="container mx-auto p-8 bg-black dark:bg-black">
      <h1 className="text-5xl font-bold text-center gradient-text mb-12">Hire Top Talent</h1>
      <div ref={(el) => (sections.current[0] = el)} className="mb-12">
        <SearchFilter filters={filters} onFilterChange={handleFilterChange} type="candidates" />
      </div>
      <div ref={(el) => (sections.current[1] = el)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCandidates.map((candidate) => (
          <div key={candidate.id} className="item-hover p-6 border-b border-pink-500 dark:border-pink-300">
            <img src={candidate.image} alt={candidate.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold text-pink-500 dark:text-pink-400">{candidate.name}</h2>
            <p className="text-pink-500 dark:text-pink-400">Skills: {candidate.skills.join(', ')}</p>
            <p className="text-pink-500 dark:text-pink-400">Location: {candidate.location}</p>
            <div className="flex items-center mt-2">
              <StarIcon className="h-6 w-6 text-yellow-400" />
              <span className="ml-2 text-pink-500 dark:text-pink-400">{candidate.rating}</span>
            </div>
            {user?.role === 'recruiter' && (
              <button className="mt-4 gradient-button text-white px-6 py-3 rounded-full shadow-glow">
                View Resume
              </button>
            )}
          </div>
        ))}
      </div>
      <div ref={(el) => (sections.current[2] = el)} className="mt-16">
        <h2 className="text-3xl font-bold gradient-text mb-8">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="item-hover p-6 border-b border-pink-500 dark:border-pink-300">
              <img src={review.image} alt={review.user} className="w-20 h-20 rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-pink-500 dark:text-pink-400">{review.user}</h3>
              <p className="text-pink-500 dark:text-pink-400">{review.comment}</p>
              <div className="flex items-center mt-2">
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <span className="ml-2 text-pink-500 dark:text-pink-400">{review.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRecruiter;