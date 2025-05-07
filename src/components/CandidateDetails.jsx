const CandidateDetails = ({ user }) => {
  return (
    <div className="container mx-auto p-8  dark:bg-black min-h-screen">
      <h1 className="text-5xl font-bold gradient-text mb-12">Candidate Details</h1>
      <div className="p-6 border-b border-pink-500 dark:border-pink-300">
        <h2 className="text-3xl font-semibold text-pink-500 dark:text-pink-400">John Doe</h2>
        <p className="text-pink-500 dark:text-pink-400">Skills: React, Node.js</p>
        <p className="text-pink-500 dark:text-pink-400">Location: Remote</p>
        <p className="text-pink-500 dark:text-pink-400">Rating: 4.5</p>
        {user?.role === 'recruiter' && (
          <button className="mt-4 gradient-button text-white px-6 py-3 rounded-full shadow-glow">
            View Resume
          </button>
        )}
      </div>
    </div>
  );
};

export default CandidateDetails;