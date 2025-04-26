import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../modules/core/components/Button';

export function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white text-secondary-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                Your All-in-One Productivity Solution
              </h1>
              <p className="text-xl text-secondary-600 mb-8">
                Manage tasks, take notes, stay updated with weather and news - all in one beautiful dashboard.
              </p>
              <Button 
                className="text-lg px-8 py-3 cursor-pointer"
                onClick={() => navigate('/dashboard')}
              >
                Get Started Now
              </Button>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw3fHxwcm9kdWN0aXZpdHklMjBhcHAlMjBkYXNoYm9hcmQlMjB3aXRoJTIwdGFza3MlMkMlMjBub3RlcyUyQyUyMHdlYXRoZXIlMkMlMjBhbmQlMjBuZXdzJTIwaW4lMjBhJTIwbW9kZXJuJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc0NTY3MzUyNnww&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Produkti Dashboard" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Everything You Need in One Place</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Produkti brings together the essential tools you need to stay organized and productive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon="task" 
              title="Task Management" 
              description="Keep track of your tasks, set priorities, and never miss a deadline."
            />
            <FeatureCard 
              icon="note" 
              title="Note Taking" 
              description="Capture your ideas, meeting notes, and important information in one place."
            />
            <FeatureCard 
              icon="weather" 
              title="Weather Updates" 
              description="Stay informed about current conditions and forecasts for your location."
            />
            <FeatureCard 
              icon="news" 
              title="Latest News" 
              description="Keep up with current events and the latest headlines from trusted sources."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Thousands of professionals trust Produkti to boost their productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Produkti has completely transformed how I organize my workday. Having everything in one place saves me so much time."
              author="Sarah Johnson"
              role="Marketing Manager"
            />
            <TestimonialCard 
              quote="The task management feature is intuitive yet powerful. I can prioritize my work effectively and stay on top of deadlines."
              author="David Chen"
              role="Software Developer"
            />
            <TestimonialCard 
              quote="I love how Produkti combines multiple tools into one sleek interface. It's become an essential part of my daily workflow."
              author="Maria Rodriguez"
              role="Freelance Designer"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Productivity?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
            Join thousands of professionals who use Produkti to organize their work and get more done.
          </p>
          <Button 
            className="text-lg px-8 py-3 cursor-pointer"
            onClick={() => navigate('/dashboard')}
          >
            Start Using Produkti Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-secondary-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=32&height=32" 
                  alt="Produkti Logo" 
                  className="h-8 w-8 mr-2"
                />
                <h3 className="text-xl font-bold text-white">Produkti</h3>
              </div>
              <p className="text-secondary-400">
                Your all-in-one productivity solution for managing tasks, notes, and staying informed.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium text-lg mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Task Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Note Taking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Weather Updates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News Feed</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-secondary-800 text-center">
            <p>
              <a 
                href="https://www.zapt.ai" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Made on ZAPT
              </a>
            </p>
            <p className="mt-4 text-secondary-500">&copy; {new Date().getFullYear()} Produkti. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  const getIcon = () => {
    switch (icon) {
      case 'task':
        return (
          <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
      case 'note':
        return (
          <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      case 'weather':
        return (
          <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      case 'news':
        return (
          <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300">
      <div className="bg-primary-100 p-3 inline-block rounded-lg mb-4">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-secondary-900">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-card">
      <svg className="h-10 w-10 text-primary-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h3v10h-9zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3v10h-9z" />
      </svg>
      <p className="text-secondary-700 mb-4">{quote}</p>
      <div>
        <p className="font-medium text-secondary-900">{author}</p>
        <p className="text-secondary-500 text-sm">{role}</p>
      </div>
    </div>
  );
}