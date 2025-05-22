
import React, { useState } from 'react';
import SectionHeader from '../components/sections/SectionHeader';
import { SERMONS_DATA } from '../constants';
import { Sermon } from '../types';
import Button from '../components/ui/Button';

const SermonCard: React.FC<{ sermon: Sermon }> = ({ sermon }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
    <div className="aspect-w-16 aspect-h-9">
      <iframe 
        src={sermon.videoUrl} 
        title={sermon.title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-1">{sermon.title}</h3>
      <p className="text-sm text-sky-600 font-medium mb-1">Speaker: {sermon.speaker}</p>
      <p className="text-xs text-gray-500 mb-3">Date: {sermon.date}</p>
      <div className="mb-3">
        {sermon.tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-2 mb-1">
            #{tag}
          </span>
        ))}
      </div>
      {sermon.transcriptUrl && sermon.transcriptUrl !== '#' && (
         <Button href={sermon.transcriptUrl} size="sm" variant="outline">Download Transcript</Button>
      )}
       {sermon.transcriptUrl === '#' && (
         <Button onClick={() => alert('Transcript coming soon!')} size="sm" variant="outline" disabled>Transcript (Soon)</Button>
      )}
    </div>
  </div>
);

const SermonFilters: React.FC<{
  years: string[];
  topics: string[];
  selectedYear: string;
  selectedTopic: string;
  onYearChange: (year: string) => void;
  onTopicChange: (topic: string) => void;
  onSearchChange: (term: string) => void;
}> = ({ years, topics, selectedYear, selectedTopic, onYearChange, onTopicChange, onSearchChange }) => (
  <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow">
    <div className="grid md:grid-cols-3 gap-4 items-end">
      <div>
        <label htmlFor="sermon-search" className="block text-sm font-medium text-gray-700 mb-1">Search Sermons</label>
        <input 
          type="text" 
          id="sermon-search"
          placeholder="Enter keyword, title, or speaker"
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
        />
      </div>
      <div>
        <label htmlFor="sermon-year" className="block text-sm font-medium text-gray-700 mb-1">Filter by Year</label>
        <select 
          id="sermon-year" 
          value={selectedYear} 
          onChange={(e) => onYearChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
        >
          <option value="">All Years</option>
          {years.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="sermon-topic" className="block text-sm font-medium text-gray-700 mb-1">Filter by Topic</label>
        <select 
          id="sermon-topic"
          value={selectedTopic}
          onChange={(e) => onTopicChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
        >
          <option value="">All Topics</option>
          {topics.map(topic => <option key={topic} value={topic}>{topic.charAt(0).toUpperCase() + topic.slice(1)}</option>)}
        </select>
      </div>
    </div>
  </div>
);


const SermonsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  const uniqueYears = Array.from(new Set(SERMONS_DATA.map(s => new Date(s.date).getFullYear().toString()))).sort((a,b) => parseInt(b) - parseInt(a));
  const uniqueTopics = Array.from(new Set(SERMONS_DATA.flatMap(s => s.tags))).sort();

  const filteredSermons = SERMONS_DATA.filter(sermon => {
    const matchesSearch = searchTerm === '' || 
      sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesYear = selectedYear === '' || new Date(sermon.date).getFullYear().toString() === selectedYear;
    const matchesTopic = selectedTopic === '' || sermon.tags.includes(selectedTopic);
    return matchesSearch && matchesYear && matchesTopic;
  });

  return (
    <>
      <SectionHeader title="Sermons & Teachings" subtitle="Be uplifted and transformed by the Word of God." />
      <SermonFilters 
        years={uniqueYears}
        topics={uniqueTopics}
        selectedYear={selectedYear}
        selectedTopic={selectedTopic}
        onYearChange={setSelectedYear}
        onTopicChange={setSelectedTopic}
        onSearchChange={setSearchTerm}
      />
      {filteredSermons.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map(sermon => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-xl py-10">
          No sermons match your current filters. Try adjusting your search or filter criteria.
        </p>
      )}
      {/* Placeholder for Pagination if many sermons */}
    </>
  );
};

export default SermonsPage;
