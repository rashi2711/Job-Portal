import { useState } from 'react';
import SearchFilter from './SearchFilter';
import { StarIcon } from '@heroicons/react/24/solid';

const HomeClient = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', skills: ['React', 'Node.js'], rating: 4.5, resume: 'john_resume.pdf' },
    { id: 2, name: 'Jane Smith', skills: ['Python', 'Django'], rating: 4.8, resume: 'jane_resume.pdf' },
  ]);
  const [filters, setFilters] = useState({
    search: '',
    skills: '',
    rating: 0,
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesSkills = !filters.skills || student.skills.some(skill => skill.toLowerCase().includes(filters.skills.toLowerCase()));
    const matchesRating = filters.rating === 0 || student.rating >= parseFloat(filters.rating);
    return matchesSearch && matchesSkills && matchesRating;
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center gradient-text mb-8">Find Top Talent</h1>
      <SearchFilter filters={filters} onFilterChange={handleFilterChange} type="students" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredStudents.map((student) => (
          <div key={student.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg card-hover glass-effect">
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">Skills: {student.skills.join(', ')}</p>
            <div className="flex items-center mt-2">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="ml-1">{student.rating}</span>
            </div>
            <a
              href={student.resume}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Resume
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeClient;