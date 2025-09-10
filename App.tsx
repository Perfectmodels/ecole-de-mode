import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import CoursesPage from './components/pages/CoursesPage';
import GalleryPage from './components/pages/GalleryPage';
import AlumniPage from './components/pages/AlumniPage';
import AdmissionsPage from './components/pages/AdmissionsPage';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';

// --- CMS & Auth Imports ---
import { AuthProvider, LoginPage, ProtectedRoute } from './components/admin/Auth';
import AdminLayout from './components/admin/AdminLayout';
import DashboardPage from './components/admin/DashboardPage';
import SettingsPage from './components/admin/SettingsPage';
import CoursesManager from './components/admin/CoursesManager';
import ClassroomManager from './components/admin/ModulesManager'; // Renamed component inside the file

// --- Migration Imports ---
import { db } from './firebase';
import { coursesData, siteSettingsData } from './data';
import type { Course, SiteSettings } from './types';


const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout for public-facing pages
const SiteLayout: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

// Layout for admin pages
const AdminRoutes: React.FC = () => (
    <ProtectedRoute>
        <AdminLayout>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/courses" element={<CoursesManager />} />
                <Route path="/classroom" element={<ClassroomManager />} />
            </Routes>
        </AdminLayout>
    </ProtectedRoute>
);

const App: React.FC = () => {

  useEffect(() => {
    const runMigration = async () => {
      console.log("Checking database for initial data...");
      const dbRef = db.ref();
      const snapshot = await dbRef.once('value');
      const data = snapshot.val();

      if (!data || !data.courses || !data.settings) {
        console.log("Database is empty or incomplete. Running migration...");

        const coursesObject = coursesData.reduce((obj: { [key: string]: Omit<Course, 'id'> }, item) => {
          const { id, ...courseData } = item;
          obj[id] = courseData;
          return obj;
        }, {});

        const migrationData = {
          courses: coursesObject,
          settings: siteSettingsData,
        };
        
        try {
          await dbRef.update(migrationData);
          console.log("Migration successful: Initial data has been written to Firebase.");
        } catch (error) {
          console.error("Migration failed:", error);
        }
      } else {
        console.log("Database already contains data. Skipping migration.");
      }
    };

    runMigration();
  }, []); // Empty dependency array ensures this runs only once on component mount.

  return (
    <AuthProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/formations" element={<CoursesPage />} />
            <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/nos-talents" element={<AlumniPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/actualites" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;