const EditProfile = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center gradient-text mb-8">Edit Profile</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 glass-effect">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="p-2 border rounded dark:bg-gray-700 dark:text-white" defaultValue="John Doe" />
          <input type="email" placeholder="Email" className="p-2 border rounded dark:bg-gray-700 dark:text-white" defaultValue="john.doe@example.com" />
          <input type="text" placeholder="Skills" className="p-2 border rounded dark:bg-gray-700 dark:text-white" defaultValue="React, Tailwind, JavaScript" />
          <input type="file" className="p-2 border rounded dark:bg-gray-700 dark:text-white" />
        </div>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save Changes</button>
      </div>
    </div>
  );
};

export default EditProfile;