const DashboardSeeker = ({ user }) => {
  const applications = [
    { id: 1, job: 'Frontend Developer', company: 'Tech Corp', status: 'Applied', date: '2025-05-01' },
    { id: 2, job: 'Backend Intern', company: 'Data Inc', status: 'Interview', date: '2025-05-03' },
  ];

  return (
    <div className="container mx-auto p-8 ml-56  dark:bg-black min-h-screen">
      <h1 className="text-5xl font-bold gradient-text mb-12">Job Seeker Dashboard</h1>
      <div id="applications" className="scroll-section">
        <h2 className="text-3xl font-semibold gradient-text mb-8">Track Applications</h2>
        <table className="w-full border-b border-pink-500 dark:border-pink-300">
          <thead>
            <tr className="border-b border-pink-500 dark:border-pink-300">
              <th className="p-3 text-left text-pink-500 dark:text-pink-400">Job Title</th>
              <th className="p-3 text-left text-pink-500 dark:text-pink-400">Company</th>
              <th className="p-3 text-left text-pink-500 dark:text-pink-400">Status</th>
              <th className="p-3 text-left text-pink-500 dark:text-pink-400">Date Applied</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-b border-pink-500 dark:border-pink-300 item-hover">
                <td className="p-3 text-pink-500 dark:text-pink-400">{app.job}</td>
                <td className="p-3 text-pink-500 dark:text-pink-400">{app.company}</td>
                <td className="p-3 text-pink-500 dark:text-pink-400">{app.status}</td>
                <td className="p-3 text-pink-500 dark:text-pink-400">{app.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div id="skill-tests" className="mt-16 scroll-section">
        <h2 className="text-3xl font-semibold gradient-text mb-8">Skill Tests</h2>
        <p className="text-pink-500 dark:text-pink-400 mb-6">Take skill tests to boost your profile.</p>
        <button className="gradient-button text-white px-6 py-3 rounded-full shadow-glow">
          Start Test
        </button>
      </div>
      <div id="interview-prep" className="mt-16 scroll-section">
        <h2 className="text-3xl font-semibold gradient-text mb-8">Interview Preparation (Coming Soon)</h2>
        <p className="text-pink-500 dark:text-pink-400">Details to be announced.</p>
      </div>
    </div>
  );
};

export default DashboardSeeker;