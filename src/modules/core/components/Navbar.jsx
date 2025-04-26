import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar({ toggleSidebar }) {
  return (
    <header className="bg-white border-b border-secondary-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md text-secondary-600 hover:bg-secondary-100 mr-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <Link to="/" className="flex items-center">
            <img 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=32&height=32" 
              alt="Produkti Logo" 
              className="h-8 w-8 mr-2"
            />
            <span className="text-xl font-semibold text-secondary-900">Produkti</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://www.zapt.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 text-sm hidden md:block"
          >
            Made on ZAPT
          </a>
          <Link 
            to="/dashboard" 
            className="btn-primary text-sm py-1.5 px-3 cursor-pointer"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}