const Profile = ({ user, setUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name: e.target.name.value,
      email: e.target.email.value,
      skills: e.target.skills.value.split(',').map((s) => s.trim()),
      resume: e.target.resume.value,
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return (
    <div className="container mx-auto p-8 ml-56 dark:bg-black min-h-screen">
      <h1 className="text-5xl font-bold gradient-text mb-12">Profile</h1>
      <div className="max-w-md mx-auto  dark:bg-black p-8 rounded-lg shadow-lg border border-pink-500 dark:border-pink-300">
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-lg text-pink-500 dark:text-pink-400">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={user.name}
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
          />
          <label className="block mb-2 text-lg text-pink-500 dark:text-pink-400">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
          />
          <label className="block mb-2 text-lg text-pink-500 dark:text-pink-400">Skills (comma-separated)</label>
          <input
            type="text"
            name="skills"
            defaultValue={user.skills.join(', ')}
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
          />
          <label className="block mb-2 text-lg text-pink-500 dark:text-pink-400">Resume</label>
          <textarea
            name="resume"
            defaultValue={user.resume}
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
          />
          <button
            type="submit"
            className="gradient-button text-white px-6 py-3 rounded-full w-full shadow-glow"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;