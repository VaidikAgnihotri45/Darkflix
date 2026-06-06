import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, User, ChevronDown, Bell } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = () => {
    navigate('/search');
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 py-4 px-4 md:px-12 flex items-center transition-colors duration-500 ease-in-out ${
        isScrolled ? 'bg-black' : 'bg-transparent bg-gradient-to-b from-black/80'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex-1">
        <svg className="h-6 md:h-8 w-24 md:w-32 fill-current text-red-600" viewBox="0 0 111 30">
          <path d="M105.06 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.127 0h5.063l3.062 7.874L105.063 0h5.063l-5.063 14.28h-.002zm-34.93 0v15.657h-4.813V14.28H60.25V9.844h14.407v4.438h-4.532zM55.376 29.938H50.72V0h4.656v29.938zm-14.22 0v-8.78l-8.157-16.5h4.814l5.501 11.719 5.501-11.72h4.814l-8.157 16.5v8.782H41.156z"/>
        </svg>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4 lg:space-x-6 flex-grow-0 mr-auto ml-8">
        <Link to="/" className={`text-sm hover:opacity-75 transition ${location.pathname === '/' ? 'text-white' : 'text-gray-300'}`}>Home</Link>
        <Link to="/my-list" className={`text-sm hover:opacity-75 transition ${location.pathname === '/my-list' ? 'text-white' : 'text-gray-300'}`}>My List</Link>
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-4">
        <button onClick={handleSearch} className="relative">
          <Search className="w-5 h-5 text-gray-200 cursor-pointer hover:text-white transition" />
        </button>
        <div>
          <Bell className="w-5 h-5 text-gray-200 cursor-pointer hover:text-white transition" />
        </div>
        <div className="relative">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
            <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white">
              <User className="w-5 h-5" />
            </div>
            <ChevronDown className={`w-4 h-4 text-white ml-1 transition-transform duration-200 ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
          </div>

          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black/90 border border-gray-800 rounded shadow-lg py-2 z-50">
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white">Profile</Link>
              <Link to="/login" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white">Sign out</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;