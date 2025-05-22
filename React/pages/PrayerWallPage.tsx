
import React, { useState, useEffect, useCallback } from 'react';
import SectionHeader from '../components/sections/SectionHeader';
import { PrayerRequest } from '../types';
import Button from '../components/ui/Button';

const PrayerRequestForm: React.FC<{ onSubmit: (request: Omit<PrayerRequest, 'id' | 'timestamp'>) => void }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.trim()) {
      alert("Prayer request cannot be empty.");
      return;
    }
    onSubmit({
      name: isAnonymous || !name.trim() ? 'Anonymous' : name,
      request,
    });
    setName('');
    setRequest('');
    setIsAnonymous(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg mb-12">
      <h3 className="text-2xl font-semibold text-slate-800 mb-6">Share Your Prayer Request</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="prayer-name" className="block text-sm font-medium text-gray-700">Your Name (Optional)</label>
          <input 
            type="text" 
            id="prayer-name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isAnonymous}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 disabled:bg-gray-100"
          />
        </div>
        <div className="flex items-center">
          <input 
            id="anonymous" 
            name="anonymous" 
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500" 
          />
          <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-900">Submit Anonymously</label>
        </div>
        <div>
          <label htmlFor="prayer-request" className="block text-sm font-medium text-gray-700">Your Prayer Request</label>
          <textarea 
            id="prayer-request" 
            rows={4} 
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            placeholder="Enter your prayer request here..."
          ></textarea>
        </div>
        <Button type="submit" variant="primary" className="w-full" iconLeft={<i className="fas fa-paper-plane"></i>}>
          Submit Request
        </Button>
      </div>
    </form>
  );
};

const PrayerDisplay: React.FC<{ requests: PrayerRequest[] }> = ({ requests }) => {
  if (requests.length === 0) {
    return <p className="text-center text-gray-600 py-8">No prayer requests submitted yet. Be the first!</p>;
  }
  return (
    <div className="space-y-6">
      {requests.map(req => (
        <div key={req.id} className="bg-sky-50 p-4 rounded-lg shadow-md border-l-4 border-sky-500">
          <p className="text-gray-700 mb-2 leading-relaxed">{req.request}</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>Submitted by: <span className="font-semibold text-sky-700">{req.name}</span></span>
            <span>{new Date(req.timestamp).toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};


const PrayerWallPage: React.FC = () => {
  const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>(() => {
    const savedRequests = localStorage.getItem('prayerRequests');
    return savedRequests ? JSON.parse(savedRequests) : [];
  });

  const addPrayerRequest = (newRequest: Omit<PrayerRequest, 'id' | 'timestamp'>) => {
    const requestWithId: PrayerRequest = {
      ...newRequest,
      id: Date.now().toString(), // Simple ID generation
      timestamp: new Date(),
    };
    setPrayerRequests(prevRequests => [requestWithId, ...prevRequests]);
  };
  
  // Save to localStorage whenever requests change
  useEffect(() => {
    localStorage.setItem('prayerRequests', JSON.stringify(prayerRequests));
  }, [prayerRequests]);

  // Simulate auto-refresh (optional, mainly for UX effect if desired)
  const [refreshKey, setRefreshKey] = useState(0);
  const simulateRefresh = useCallback(() => {
    // This doesn't actually fetch new data unless you implement it
    // For now, it just forces a re-render of PrayerDisplay if its key changes
    setRefreshKey(prev => prev + 1); 
  }, []);

  useEffect(() => {
    const intervalId = setInterval(simulateRefresh, 30000); // Simulate refresh every 30 seconds
    return () => clearInterval(intervalId);
  }, [simulateRefresh]);

  return (
    <>
      <SectionHeader 
        title="Prayer Wall" 
        subtitle="Share your needs and stand in prayer with our community. 'The prayer of a righteous person is powerful and effective.' - James 5:16" 
      />
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <PrayerRequestForm onSubmit={addPrayerRequest} />
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Community Prayers</h3>
          <PrayerDisplay key={refreshKey} requests={prayerRequests} />
        </div>
      </div>
       <div className="mt-12 p-6 bg-amber-100 border border-amber-300 rounded-lg text-center">
        <h4 className="text-xl font-semibold text-amber-800 mb-2">Join Us in Prayer</h4>
        <p className="text-amber-700">
          We encourage you to take a moment to pray for the requests shared here. Your prayers make a difference.
        </p>
      </div>
    </>
  );
};

export default PrayerWallPage;
