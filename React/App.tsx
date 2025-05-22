
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SermonsPage from './pages/SermonsPage';
import EventsPage from './pages/EventsPage';
import MinistriesPage from './pages/MinistriesPage';
import GalleryPage from './pages/GalleryPage';
import PrayerWallPage from './pages/PrayerWallPage';
import GivePage from './pages/GivePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Spinner from './components/ui/Spinner';
import { navLinks } from './constants'; 
import PageWrapper from './components/layout/PageWrapper';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-900 bg-opacity-90 flex flex-col items-center justify-center z-[9999]">
        <Spinner size="xl" />
        <img src="https://picsum.photos/seed/logo-loader/150/75" alt="Nehemia Ministry Logo" className="mt-4 h-16"/>
        <p className="text-white text-lg mt-2">Loading Nehemia Ministry Kenya...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar logoSrc="https://picsum.photos/seed/logo-nav/120/50" navLinks={navLinks} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<PageWrapper title="Welcome"><HomePage /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper title="About Us"><AboutPage /></PageWrapper>} />
          <Route path="/sermons" element={<PageWrapper title="Sermons"><SermonsPage /></PageWrapper>} />
          <Route path="/events" element={<PageWrapper title="Events"><EventsPage /></PageWrapper>} />
          <Route path="/ministries" element={<PageWrapper title="Our Ministries"><MinistriesPage /></PageWrapper>} />
          <Route path="/gallery" element={<PageWrapper title="Gallery"><GalleryPage /></PageWrapper>} />
          <Route path="/prayer-wall" element={<PageWrapper title="Prayer Wall"><PrayerWallPage /></PageWrapper>} />
          <Route path="/give" element={<PageWrapper title="Give Online"><GivePage /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper title="Ministry Blog"><BlogPage /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper title="Contact Us"><ContactPage /></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
