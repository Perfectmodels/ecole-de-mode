import React, { createContext, useContext, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigate(); // This was causing the error

  const login = (password: string) => {
    // In a real app, you'd verify username and password against a server.
    if (password === 'password') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Navigation is now handled by the component that calls logout (AdminLayout)
    // navigate('/admin/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};


export const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/admin";
    const logoUrl = 'https://scontent.flbv4-1.fna.fbcdn.net/v/t39.30808-6/284489863_103459222388793_5383421878124120700_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFTD-WFpfgyGCqilNxp9n7WGqqxuRDEoKYaqrG5EMSgpqq7cbFKiK7myD1fxbQt2bbIX2faYNbbiBo891yah5DH&_nc_ohc=pgiYDuzDMhgQ7kNvwGAkKY1&_nc_oc=AdntxJqsag6z0oJt85XPXRBP3cMwyrgOq2wQUze35nqNZyjYyb99d5SmNz7pMqy5Z58&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=u7LzfT4gNYfmh7Qxh_aSUA&oh=00_AfVPjxJCvKAJV8tW1SCXlfKA404b-lVpYgOyAcQqj9eP9w&oe=68BB8120';


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (username !== 'admin') {
            setError('Nom d\'utilisateur incorrect.');
            return;
        }
        const success = login(password);
        if (success) {
            navigate(from, { replace: true });
        } else {
            setError('Mot de passe incorrect.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-stone-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <img src={logoUrl} alt="Logo" className="w-24 h-24 mx-auto" />
                <h1 className="text-2xl font-bold text-center text-brand-dark font-serif">Panneau d'Administration</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-brand-burgundy focus:border-brand-burgundy"
                            placeholder="admin"
                        />
                    </div>
                    <div>
                        <label htmlFor="password"className="block text-sm font-medium text-gray-700">Mot de passe</label>
                         <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-brand-burgundy focus:border-brand-burgundy"
                            placeholder="password"
                        />
                    </div>
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <button type="submit" className="w-full px-4 py-2 font-bold text-white uppercase bg-brand-dark rounded-md hover:bg-brand-burgundy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-burgundy transition-colors">
                        Connexion
                    </button>
                </form>
            </div>
        </div>
    );
};