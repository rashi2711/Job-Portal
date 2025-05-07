import { useState } from 'react';
import SearchFilter from './SearchFilter';
import { StarIcon } from '@heroicons/react/24/solid';

const DashboardRecruiter = ({ user }) => {
  const [filters, setFilters] = useState({
    search: '',
    skills: '',
    rating: 0,
    location: '',
  });
  const [jobForm, setJobForm] = useState({ title: '', skills: '', description: '', location: '', type: '' });

  const applicants = [
    {
      id: 1,
      name: 'John Doe',
      skills: ['React', 'Node.js'],
      rating: 4.5,
      resume: 'John resume content...',
      location: 'Remote',
      appliedJobs: [
        { id: 1, title: 'Frontend Developer', company: 'Tech Corp', match: 92, type: 'Full-time' },
        { id: 2, title: 'Backend Intern', company: 'Tech Corp', match: 85, type: 'Internship' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      skills: ['Python', 'Django'],
      rating: 4.8,
      resume: 'Jane resume content...',
      location: 'New York',
      appliedJobs: [{ id: 1, title: 'Frontend Developer', company: 'Tech Corp', match: 88, type: 'Full-time' }],
    },
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleJobSubmit = (e) => {
    e.preventDefault();
    console.log('Job Posted:', jobForm);
    setJobForm({ title: '', skills: '', description: '', location: '', type: '' });
  };

  const filteredApplicants = applicants.map((applicant) => {
    const bestJob =
      applicant.appliedJobs.length > 1 && applicant.appliedJobs[0].company === applicant.appliedJobs[1].company
        ? applicant.appliedJobs.reduce((best, job) => (job.match > best.match ? job : best))
        : applicant.appliedJobs[0] || null;

    const matchesSearch = applicant.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesSkills = !filters.skills || applicant.skills.some((skill) => skill.toLowerCase().includes(filters.skills.toLowerCase()));
    const matchesRating = filters.rating === 0 || applicant.rating >= parseFloat(filters.rating);
    const matchesLocation = !filters.location || applicant.location.toLowerCase().includes(filters.location.toLowerCase());

    return matchesSearch && matchesSkills && matchesRating && matchesLocation ? { ...applicant, bestJob } : null;
  }).filter((applicant) => applicant !== null);

  return (
    <div className="container mx-auto p-8 ml-56 dark:bg-black min-h-screen">
      <h1 className="text-5xl font-bold gradient-text mb-12">Recruiter Dashboard</h1>
      <div id="post-job" className="mb-16 scroll-section">
        <h2 className="text-3xl font-semibold gradient-text mb-8">Post a New Job</h2>
        <div className="max-w-lg">
          <input
            type="text"
            placeholder="Job Title"
            value={jobForm.title}
            onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
          />
          <input
            type="text"
            placeholder="Skills (comma-separated)"
            value={jobForm.skills}
            onChange={(e) => setJobForm({ ...jobForm, skills: e.target.value })}
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
          />
          <input
            type="text"
            placeholder="Location"
            value={jobForm.location}
            onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
          />
          <select
            name="type"
            value={jobForm.type}
            onChange={(e) => setJobForm({ ...jobForm, type: e.target.value })}
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
          >
            <option value="">Select Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
          </select>
          <textarea
            placeholder="Job Description"
            value={jobForm.description}
            onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
          />
          <button
            onClick={handleJobSubmit}
            className="gradient-button text-white px-6 py-3 rounded-full shadow-glow"
          >
            Post Job
          </button>
        </div>
      </div>
      <div id="applicants" className="scroll-section">
        <h2 className="text-3xl font-semibold gradient-text mb-8">View Applicants</h2>
        <SearchFilter filters={filters} onFilterChange={handleFilterChange} type="candidates" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredApplicants.map((applicant) => (
            <div
              key={applicant.id}
              className="item-hover p-6 border-b border-pink-500 dark:border-pink-300"
            >
              <h3 className="text-2xl font-semibold text-pink-500 dark:text-pink-400">{applicant.name}</h3>
              <p className="text-pink-500 dark:text-pink-400">Skills: {applicant.skills.join(', ')}</p>
              <p className="text-pink-500 dark:text-pink-400">Location: {applicant.location}</p>
              <div className="flex items-center mt-2">
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <span className="ml-2 text-pink-500 dark:text-pink-400">{applicant.rating}</span>
              </div>
              {applicant.bestJob && (
                <p className="text-green-600 dark:text-green-400">Best Match: {applicant.bestJob.title} ({applicant.bestJob.match}%)</p>
              )}
              <button className="mt-4 gradient-button text-white px-6 py-3 rounded-full shadow-glow">
                View Resume
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardRecruiter;