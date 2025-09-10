import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

const navLinks = [
  { to: '/admin', text: 'Tableau de Bord' },
  { to: '/admin/settings', text: 'Paramètres du Site' },
  { to: '/admin/courses', text: 'Formations' },
  { to: '/admin/classroom', text: 'Classroom' },
  // Add links to manage other sections here
  // { to: '/admin/pages', text: 'Pages' },
  // { to: '/admin/gallery', text: 'Galerie' },
  // { to: '/admin/alumni', text: 'Nos Talents' },
  // { to: '/admin/blog', text: 'Actualités' },
];

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const activeLinkClass = 'bg-brand-burgundy text-white';
  const inactiveLinkClass = 'text-gray-300 hover:bg-gray-700 hover:text-white';

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-brand-dark text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
           <Link to="/admin" className="text-2xl font-serif font-bold text-white">CMS Admin</Link>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end // a to ensure only exact match is active for dashboard
              className={({ isActive }) =>
                `block px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? activeLinkClass : inactiveLinkClass}`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-700">
            <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
                Déconnexion
            </button>
             <Link to="/" target="_blank" rel="noopener noreferrer" className="mt-2 block w-full text-left px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white">
                Voir le site
             </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;