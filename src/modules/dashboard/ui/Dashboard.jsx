import React from 'react';
import { Card } from '../../core/components/Card';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary-900">Dashboard</h1>
        <p className="text-secondary-500">Welcome to your productivity hub</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Tasks" 
          value="12" 
          label="Active tasks"
          icon="task"
          color="blue" 
        />
        <StatCard 
          title="Notes" 
          value="24" 
          label="Total notes"
          icon="note"
          color="green" 
        />
        <StatCard 
          title="Weather" 
          value="72°F" 
          label="Sunny"
          icon="weather"
          color="yellow" 
        />
        <StatCard 
          title="News" 
          value="15" 
          label="Unread articles"
          icon="news"
          color="purple" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Tasks</h2>
          <div className="space-y-3">
            <TaskItem 
              title="Complete project proposal" 
              dueDate="Today" 
              priority="high"
              complete={false}
            />
            <TaskItem 
              title="Schedule team meeting" 
              dueDate="Tomorrow" 
              priority="medium"
              complete={false}
            />
            <TaskItem 
              title="Review quarterly reports" 
              dueDate="Aug 20" 
              priority="medium"
              complete={false}
            />
            <TaskItem 
              title="Update company website" 
              dueDate="Aug 25" 
              priority="low"
              complete={true}
            />
          </div>
          <div className="mt-4 text-right">
            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
              View all tasks →
            </a>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Latest Notes</h2>
          <div className="space-y-3">
            <NoteItem 
              title="New marketing ideas" 
              date="1 hour ago"
              preview="We should consider implementing these strategies for Q4..."
            />
            <NoteItem 
              title="Meeting with clients" 
              date="Yesterday"
              preview="Key discussion points: product roadmap, timeline, budget..."
            />
            <NoteItem 
              title="Project requirements" 
              date="Aug 10"
              preview="Requirements for the new feature include..."
            />
          </div>
          <div className="mt-4 text-right">
            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
              View all notes →
            </a>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Weather Forecast</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="flex justify-center">
                <svg className="h-16 w-16 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="mt-2">
                <h3 className="text-3xl font-bold">72°F</h3>
                <p className="text-lg text-secondary-600">Sunny</p>
                <p className="text-sm text-secondary-500">New York, NY</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-6">
            <WeatherDay day="Mon" temp="74°" icon="sun" />
            <WeatherDay day="Tue" temp="70°" icon="cloud-sun" />
            <WeatherDay day="Wed" temp="68°" icon="cloud" />
            <WeatherDay day="Thu" temp="72°" icon="sun" />
          </div>
        </Card>

        <Card className="lg:col-span-2 p-6">
          <h2 className="text-xl font-semibold mb-4">Latest News</h2>
          <div className="space-y-4">
            <NewsItem 
              title="Tech industry sees major growth in Q2" 
              source="Tech Today"
              time="2 hours ago"
            />
            <NewsItem 
              title="New sustainability initiatives gaining traction" 
              source="Green Report"
              time="5 hours ago"
            />
            <NewsItem 
              title="Global markets respond to economic policy changes" 
              source="Finance Daily"
              time="Yesterday"
            />
          </div>
          <div className="mt-4 text-right">
            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
              View all news →
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, label, icon, color }) {
  const getIcon = () => {
    switch (icon) {
      case 'task':
        return (
          <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
      case 'note':
        return (
          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      case 'weather':
        return (
          <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'news':
        return (
          <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-secondary-500">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-secondary-900">{value}</p>
          <p className="mt-1 text-sm text-secondary-500">{label}</p>
        </div>
        <div className="bg-blue-50 p-2 rounded-lg">
          {getIcon()}
        </div>
      </div>
    </Card>
  );
}

function TaskItem({ title, dueDate, priority, complete }) {
  const getPriorityBadge = () => {
    switch (priority) {
      case 'high':
        return <span className="badge-red">High</span>;
      case 'medium':
        return <span className="badge-yellow">Medium</span>;
      case 'low':
        return <span className="badge-blue">Low</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`flex items-center p-3 border rounded-lg ${complete ? 'bg-secondary-50' : 'bg-white'}`}>
      <input 
        type="checkbox" 
        checked={complete}
        readOnly
        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded cursor-pointer"
      />
      <div className="ml-3 flex-grow">
        <p className={`text-sm font-medium ${complete ? 'text-secondary-500 line-through' : 'text-secondary-900'}`}>
          {title}
        </p>
        <div className="flex items-center mt-1">
          <span className="text-xs text-secondary-500">Due: {dueDate}</span>
          <span className="mx-2 text-secondary-300">•</span>
          {getPriorityBadge()}
        </div>
      </div>
    </div>
  );
}

function NoteItem({ title, date, preview }) {
  return (
    <div className="p-3 border rounded-lg bg-white">
      <p className="text-sm font-medium text-secondary-900">{title}</p>
      <p className="text-xs text-secondary-500 mt-1">{date}</p>
      <p className="text-sm text-secondary-600 mt-2 line-clamp-2">{preview}</p>
    </div>
  );
}

function WeatherDay({ day, temp, icon }) {
  const getIcon = () => {
    switch (icon) {
      case 'sun':
        return (
          <svg className="h-8 w-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        );
      case 'cloud-sun':
        return (
          <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        );
      case 'cloud':
        return (
          <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-center p-2">
      <p className="text-xs font-medium text-secondary-700">{day}</p>
      <div className="my-2 flex justify-center">
        {getIcon()}
      </div>
      <p className="text-sm font-medium">{temp}</p>
    </div>
  );
}

function NewsItem({ title, source, time }) {
  return (
    <div className="p-3 border rounded-lg bg-white">
      <p className="text-sm font-medium text-secondary-900">{title}</p>
      <div className="flex items-center mt-1">
        <span className="text-xs font-medium text-primary-600">{source}</span>
        <span className="mx-2 text-secondary-300">•</span>
        <span className="text-xs text-secondary-500">{time}</span>
      </div>
    </div>
  );
}