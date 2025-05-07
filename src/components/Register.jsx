const Register = ({ onRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
      role: e.target.role.value,
      skills: e.target.skills.value.split(',').map((s) => s.trim()),
      resume: e.target.resume.value,
    };
    onRegister(userData);
  };

  return (
    <div className="container mx-auto p-8  dark:bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full  dark:bg-black p-8 rounded-lg shadow-lg border border-pink-500 dark:border-pink-300">
        <h1 className="text-5xl font-bold gradient-text mb-12 text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-lg text-pink-500 dark:text-pink-400">Name</label>
          <input
            type="text"
            name="name"
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
            required
          />
          <label className="block mb-2 text-lg text-pink-500 dark:text-pink-400">Email</label>
          <input
            type="email"
            name="email"
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
            required
          />
          <label className="block mb-2 text-lg text-pink-500 dark:text-pink-400">Username</label>
          <input
            type="text"
            name="username"
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
            required
          />
          <label className="block mb-2 text-lg text-pink-500 dark:text-pink-400">Password</label>
          <input
            type="password"
            name="password"
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
            required
          />
          <label className="block mb-2 text-lg text-pink-500 dark:text-pink-400">Role</label>
          <select
            name="role"
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
          >
            <option value="seeker">Job Seeker</option>
            <option value="recruiter">Recruiter</option>
          </select>
          <label className="block mb-2 text-lg text-pink-500 dark:text-pink-400">Skills (comma-separated)</label>
          <input
            type="text"
            name="skills"
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
          />
          <label className="block mb-2 text-lg text-pink-500 dark:text-pink-400">Resume</label>
          <textarea
            name="resume"
            className="p-3 border border-pink-500 dark:border-pink-300 rounded-lg bg-transparent text-pink-500 dark:text-pink-400 w-full mb-6"
          />
          <button
            type="submit"
            className="gradient-button text-white px-6 py-3 rounded-full w-full shadow-glow"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;