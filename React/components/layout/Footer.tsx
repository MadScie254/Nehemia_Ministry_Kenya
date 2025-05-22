
import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks, CONTACT_DETAILS } from '../../constants';
import GoogleTranslatePlaceholder from '../ui/GoogleTranslatePlaceholder';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h5 className="text-xl font-bold text-white mb-4">Nehemia Ministry</h5>
            <p className="text-sm mb-4">
              Transforming lives through faith, hope, and love. Founded in 2006 by Bishop David & Rev. Selina Walukhu.
            </p>
            <Link to="/about" className="text-amber-400 hover:text-amber-300 font-semibold text-sm">
              Learn More &rarr;
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/sermons" className="hover:text-amber-400 transition-colors">Sermons</Link></li>
              <li><Link to="/events" className="hover:text-amber-400 transition-colors">Events</Link></li>
              <li><Link to="/ministries" className="hover:text-amber-400 transition-colors">Ministries</Link></li>
              <li><Link to="/give" className="hover:text-amber-400 transition-colors">Give Online</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Contact Us</h5>
            <ul className="space-y-2 text-sm">
              <li><i className="fas fa-map-marker-alt mr-2 text-amber-400"></i>{CONTACT_DETAILS.address}</li>
              <li><i className="fas fa-phone mr-2 text-amber-400"></i>{CONTACT_DETAILS.phone}</li>
              <li><i className="fas fa-envelope mr-2 text-amber-400"></i>{CONTACT_DETAILS.email}</li>
            </ul>
            <div className="mt-4">
              <GoogleTranslatePlaceholder />
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Stay Connected</h5>
            <p className="text-sm mb-3">Subscribe to our newsletter for updates.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-3 py-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button 
                  type="submit" 
                  className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r-md font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nehemia Ministry Kenya. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors text-xl"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
