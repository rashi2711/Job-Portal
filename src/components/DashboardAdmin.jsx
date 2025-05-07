const DashboardAdmin = ({ user }) => {
  return (
    <div className="container mx-auto p-6 ml-64 bg-gradient-to-br from-red-100 to-pink-200 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold gradient-text mb-8">Admin Dashboard</h1>
      <div id="users">
        <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 glass-effect">
          <p className="text-gray-600 dark:text-gray-300">User management interface (placeholder).</p>
        </div>
      </div>
      <div id="jobs" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Manage Jobs</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 glass-effect">
          <p className="text-gray-600 dark:text-gray-300">Job management interface (placeholder).</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;