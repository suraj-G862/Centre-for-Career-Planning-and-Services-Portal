import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoutButton from './LogoutButton.jsx';

const AllLinks = [
  { name: 'Home', link: '/home' },
  { name: 'Profile', link: '/profile' },
  { name: 'Applications', link: '/applications' },
  { name: 'Saved Applications', link: '/saved-applications' },
  { name: 'Analytics', link: '/analytics' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#0fa18e] text-white px-4 flex items-center justify-between z-20 w-screen">
        <Link to="/" className="flex items-center">
          <img src="./ccps.svg" alt="Logo" className="h-10 w-10" />
          <span className="ml-4 text-xl font-montserrat">CCPS</span>
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-[#13665b] rounded-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="hidden md:flex fixed left-0 top-0 h-screen w-60 bg-[#0fa18e] text-white flex-col justify-between">
        <div>
          <div className="flex items-center justify-start mt-8 ml-6">
            <Link to="/" className="flex items-center">
              <img src="./ccps.svg" alt="Logo" className="h-16 w-16" />
              <span className="ml-4 text-2xl font-montserrat">CCPS</span>
            </Link>
          </div>
          <nav className="mt-8">
            {AllLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="block text-lg font-montserrat text-white py-3 px-6 hover:bg-[#13665b] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mb-8 px-6">
          <LogoutButton />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10" onClick={() => setIsOpen(false)} />
      )}

      <div className={`md:hidden fixed top-16 left-0 w-60 bg-[#0fa18e] h-[calc(100vh-4rem)] transform transition-transform duration-300 ease-in-out z-20 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <nav className="flex flex-col h-full justify-between py-4">
          <div>
            {AllLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="block text-lg font-montserrat text-white py-3 px-6 hover:bg-[#13665b] transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="px-6 ">
            <LogoutButton />
          </div>
        </nav>
      </div>

      <div className="md:pl-60 pt-16 md:pt-0">
      </div>
    </>
  );
};

export default Sidebar;