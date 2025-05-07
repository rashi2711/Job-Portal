const Login = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: e.target.username.value,
      password: e.target.password.value,
      role: e.target.role.value,
      name: 'Test User',
      email: 'test@example.com',
      skills: ['React', 'JavaScript'],
      resume: 'Sample resume content...',
    };
    onLogin(userData);
  };

  return (
    <div className="container mx-auto p-8 bg-white dark:bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-black p-8 rounded-lg shadow-lg border-gradient">
        <h1 className="text-5xl font-bold gradient-text mb-12 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-lg text-black dark:text-pink-400">Username</label>
          <input
            type="text"
            name="username"
            className="p-3 border-gradient rounded-lg bg-transparent text-black dark:text-pink-400 w-full mb-6"
            required
          />
          <label className="block mb-2 text-lg text-black dark:text-pink-400">Password</label>
          <input
            type="password"
            name="password"
            className="p-3 border-gradient rounded-lg bg-transparent text-black dark:text-pink-400 w-full mb-6"
            required
          />
          <label className="block mb-2 text-lg text-black dark:text-pink-400">Role</label>
          <select
            name="role"
            className="p-3 border-gradient rounded-lg bg-transparent text-black dark:text-pink-400 w-full mb-6"
          >
            <option value="seeker">Job Seeker</option>
            <option value="recruiter">Recruiter</option>
          </select>
          <button
            type="submit"
            className="gradient-button text-white px-6 py-3 rounded-full w-full shadow-glow"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;