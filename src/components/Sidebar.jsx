import { Link } from 'react-router-dom';
import { UserIcon, BriefcaseIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/solid';

const Sidebar = ({ user, setUser }) => {
  const menus = {
    seeker: [
      { name: 'Dashboard', path: '/dashboard/seeker', icon: <ChartBarIcon className="h-8 w-8 text-black dark:text-pink-400" /> },
      { name: 'Find Jobs', path: '/', icon: <BriefcaseIcon className="h-8 w-8 text-black dark:text-pink-400" /> },
      { name: 'Track Applications', path: '/dashboard/seeker#applications', icon: <BriefcaseIcon className="h-8 w-8 text-black dark:text-pink-400" /> },
      { name: 'Skill Tests', path: '/dashboard/seeker#skill-tests', icon: <CogIcon className="h-8 w-8 text-black dark:text-pink-400" /> },
      { name: 'Workshops', path: '/#workshops', icon: <CogIcon className="h-8 w-8 text-black dark:text-pink-400" /> },
      { name: 'Interview Prep', path: '/dashboard/seeker#interview-prep', icon: <CogIcon className="h-8 w-8 text-black dark:text-pink-400" /> },
    ],
    recruiter: [
      { name: 'Dashboard', path: '/dashboard/recruiter', icon: <ChartBarIcon className="h-8 w-8 text-black dark:text-pink-400" /> },
      { name: 'Post Job', path: '/dashboard/recruiter#post-job', icon: <BriefcaseIcon className="h-8 w-8 text-black dark:text-pink-400" /> },
      { name: 'View Applicants', path: '/dashboard/recruiter#applicants', icon: <UserIcon className="h-8 w-8 text-black dark:text-pink-400" /> },
    ],
  };

  return (
    <div className="w-56 bg-white dark:bg-black p-6 shadow-lg h-screen fixed overflow-y-auto glass-effect border-r border-gradient">
      <h2 className="text-2xl font-bold mb-8 text-black dark:text-pink-400">{user.role.charAt(0).toUpperCase() + user.role.slice(1)} Menu</h2>
      <ul>
        <li className="mb-6">
          <Link to="/profile" className="flex items-center space-x-3 text-black dark:text-pink-400">
            <UserIcon className="h-8 w-8 text-black dark:text-pink-400" />
            <span className="text-lg">Profile</span>
          </Link>
        </li>
        {menus[user.role].map((item) => (
          <li key={item.name} className="mb-6">
            <Link to={item.path} className="flex items-center space-x-3 text-black dark:text-pink-400">
              {item.icon}
              <span className="text-lg">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;