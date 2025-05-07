const SkillTest = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center gradient-text mb-8">Skill Tests</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 glass-effect">
        <p className="text-gray-600 dark:text-gray-300">Take skill tests to showcase your abilities and improve your profile visibility.</p>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Start Test</button>
      </div>
    </div>
  );
};

export default SkillTest;