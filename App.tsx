
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
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

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/formations" element={<CoursesPage />} />
            <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/nos-talents" element={<AlumniPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/actualites" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;