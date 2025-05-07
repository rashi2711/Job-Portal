const JobDetails = ({ user }) => {
  const job = {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    skills: ['React', 'Tailwind'],
    match: 92,
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop modern web applications using React and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
  };

  return (
    <div className={`container mx-auto p-6 ml-64 ${user?.role === 'seeker' ? 'bg-gradient-to-br from-blue-100 to-purple-200' : 'bg-gradient-to-br from-blue-100 to-purple-200'} dark:from-gray-800 dark:to-gray-900 min-h-screen`}>
      <h1 className="text-4xl font-bold gradient-text mb-8">{job.title}</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 glass-effect">
        <img src={job.image} alt={job.title} className="w-full h-60 object-cover rounded mb-4" />
        <p className="text-gray-600 dark:text-gray-300">Company: {job.company}</p>
        <p className="text-gray-600 dark:text-gray-300">Skills: {job.skills.join(', ')}</p>
        <p className="text-gray-600 dark:text-gray-300">Location: {job.location}</p>
        <p className="text-gray-600 dark:text-gray-300">Type: {job.type}</p>
        <p className="text-green-500">Skill Match: {job.match}%</p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">{job.description}</p>
        {user?.role === 'seeker' && (
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Apply Now
          </button>
        )}
      </div>
    </div>
  );
};

export default JobDetails;