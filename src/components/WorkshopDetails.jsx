const WorkshopDetails = () => {
  return (
    <div className="container mx-auto p-8 dark:bg-black min-h-screen">
      <h1 className="text-5xl font-bold gradient-text mb-12">Workshop Details</h1>
      <div className="p-6 border-b border-pink-500 dark:border-pink-300">
        <h2 className="text-3xl font-semibold text-pink-500 dark:text-pink-400">Resume Building Workshop</h2>
        <p className="text-pink-500 dark:text-pink-400">Date: 2025-06-01</p>
        <p className="text-pink-500 dark:text-pink-400">Description: Learn to craft a winning resume.</p>
        <button className="mt-4 gradient-button text-white px-6 py-3 rounded-full shadow-glow">
          Register
        </button>
      </div>
    </div>
  );
};

export default WorkshopDetails;