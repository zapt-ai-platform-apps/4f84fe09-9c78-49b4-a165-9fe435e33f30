import React from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 h-full">
        <Sidebar open={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
      
      <footer className="bg-white py-3 text-center text-sm text-secondary-500 border-t border-secondary-200">
        <a 
          href="https://www.zapt.ai" 
          target="_blank"
          rel="noopener noreferrer" 
          className="text-primary-600 hover:text-primary-700 transition-colors"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}