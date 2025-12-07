import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Heart, Home } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const LanguageSelector = () => (
    <div className="flex items-center space-x-2 text-sm bg-brand-50 px-3 py-1.5 rounded-full">
      <Globe className="w-4 h-4 text-brand-600" />
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value as any)}
        className="bg-transparent border-none text-brand-700 font-medium focus:ring-0 cursor-pointer text-xs uppercase"
      >
        <option value="nl">NL</option>
        <option value="en">EN</option>
        <option value="de">DE</option>
        <option value="es">ES</option>
      </select>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-brand-50/30 text-gray-700 font-sans">
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-brand-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold tracking-tight text-brand-dark flex items-center gap-2 group">
                <div className="bg-gradient-to-tr from-brand-600 to-brand-400 p-2.5 rounded-2xl shadow-lg shadow-brand-200 group-hover:shadow-brand-300 transition-all transform group-hover:-translate-y-0.5">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-500">Dutch Rentals</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                <Link to="/" className="text-gray-600 hover:text-brand-600 font-medium transition-colors px-3 py-2 rounded-xl hover:bg-brand-50">{t('nav.home')}</Link>
                <Link to="/aanbod" className="text-gray-600 hover:text-brand-600 font-medium transition-colors px-3 py-2 rounded-xl hover:bg-brand-50">{t('nav.properties')}</Link>
                <Link to="/over-ons" className="text-gray-600 hover:text-brand-600 font-medium transition-colors px-3 py-2 rounded-xl hover:bg-brand-50">{t('nav.about')}</Link>
                <Link to="/blog" className="text-gray-600 hover:text-brand-600 font-medium transition-colors px-3 py-2 rounded-xl hover:bg-brand-50">{t('nav.blog')}</Link>
              </div>
              <div className="border-l border-gray-100 pl-6">
                <LanguageSelector />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex items-center gap-4 md:hidden">
              <LanguageSelector />
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-brand-600 hover:bg-brand-50 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-6 space-y-2 shadow-xl border-t border-gray-100 absolute w-full rounded-b-3xl">
            <Link to="/" onClick={closeMenu} className="block px-4 py-3 rounded-2xl text-base font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600">{t('nav.home')}</Link>
            <Link to="/aanbod" onClick={closeMenu} className="block px-4 py-3 rounded-2xl text-base font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600">{t('nav.properties')}</Link>
            <Link to="/over-ons" onClick={closeMenu} className="block px-4 py-3 rounded-2xl text-base font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600">{t('nav.about')}</Link>
            <Link to="/blog" onClick={closeMenu} className="block px-4 py-3 rounded-2xl text-base font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600">{t('nav.blog')}</Link>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-brand-100 mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-brand-dark text-lg font-bold mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-accent-500 fill-current" />
                Dutch Rentals
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Premium housing. Fair play. <br/>
                Verified listings for verified tenants.
              </p>
            </div>
            <div>
              <h3 className="text-brand-dark text-lg font-bold mb-4">Info</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link to="/algemene-voorwaarden" className="hover:text-brand-600 transition-colors">{t('terms.title')}</Link></li>
                <li><Link to="/privacy" className="hover:text-brand-600 transition-colors">{t('privacy.title')}</Link></li>
                <li><Link to="/blog" className="hover:text-brand-600 transition-colors">{t('nav.blog')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-brand-dark text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-500">
                <p className="font-medium text-brand-600">Jajo Consult Beheer B.V.</p>
                <p>KvK: 77933877</p>
                <a href="mailto:info@dutch-rentals.nl" className="text-brand-600 hover:underline">info@dutch-rentals.nl</a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-100 pt-8 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Dutch Rentals. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;