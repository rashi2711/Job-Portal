const ApplicationTrack = () => {
  const applications = [
    { id: 1, job: 'Frontend Developer', company: 'Tech Corp', status: 'Applied', date: '2025-05-01' },
    { id: 2, job: 'Backend Intern', company: 'Data Inc', status: 'Interview', date: '2025-05-03' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center gradient-text mb-8">Track Applications</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 glass-effect">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Job Title</th>
              <th className="p-2 text-left">Company</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Date Applied</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app.id} className="border-b">
                <td className="p-2">{app.job}</td>
                <td className="p-2">{app.company}</td>
                <td className="p-2">{app.status}</td>
                <td className="p-2">{app.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationTrack;