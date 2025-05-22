
import React, { useState } from 'react';
import SectionHeader from '../components/sections/SectionHeader';
import { EVENTS_DATA, TESTIMONIALS_DATA } from '../constants';
import { EventItem } from '../types';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import TestimonialCarousel from '../components/ui/Carousel';

const EventCard: React.FC<{ event: EventItem; onRsvpClick: (eventTitle: string) => void }> = ({ event, onRsvpClick }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
    <img src={event.image} alt={event.title} className="w-full h-48 object-cover"/>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{event.title}</h3>
      <p className="text-sm text-sky-600 font-medium mb-1">
        <i className="fas fa-calendar-alt mr-2"></i>{event.date} at {event.time}
      </p>
      <p className="text-sm text-gray-500 mb-3">
        <i className="fas fa-map-marker-alt mr-2"></i>{event.location}
      </p>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
      {event.isUpcoming && (
        <Button onClick={() => onRsvpClick(event.title)} variant="primary" size="sm">RSVP Now</Button>
      )}
      {!event.isUpcoming && (
        <span className="text-sm text-gray-500 italic">This event has passed.</span>
      )}
    </div>
  </div>
);

const RsvpForm: React.FC<{ eventTitle: string; onClose: () => void }> = ({ eventTitle, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for submission logic
    console.log({ eventTitle, name, email, guests });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center">
        <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
        <p className="text-gray-700 mb-4">Your RSVP for "{eventTitle}" has been received.</p>
        <Button onClick={onClose} variant="primary">Close</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="rsvp-name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" id="rsvp-name" value={name} onChange={(e) => setName(e.target.value)} required 
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"/>
      </div>
      <div>
        <label htmlFor="rsvp-email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input type="email" id="rsvp-email" value={email} onChange={(e) => setEmail(e.target.value)} required
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"/>
      </div>
      <div>
        <label htmlFor="rsvp-guests" className="block text-sm font-medium text-gray-700">Number of Guests (including yourself)</label>
        <input type="number" id="rsvp-guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} min="1" required
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"/>
      </div>
      <div className="flex justify-end space-x-3">
        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
        <Button type="submit" variant="primary">Submit RSVP</Button>
      </div>
    </form>
  );
};

const EventsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventTitle, setSelectedEventTitle] = useState('');

  const upcomingEvents = EVENTS_DATA.filter(event => event.isUpcoming);
  const pastEvents = EVENTS_DATA.filter(event => !event.isUpcoming).slice(0, 3); // Show limited past events

  const handleRsvpClick = (eventTitle: string) => {
    setSelectedEventTitle(eventTitle);
    setIsModalOpen(true);
  };

  return (
    <>
      <SectionHeader title="Church Events" subtitle="Connect, grow, and serve with us at our upcoming events." />
      
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-slate-700 mb-6 border-b-2 border-amber-400 pb-2">Upcoming Events</h3>
        {upcomingEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} onRsvpClick={handleRsvpClick} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-8">No upcoming events scheduled at this time. Please check back soon!</p>
        )}
      </div>

      {pastEvents.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-700 mb-6 border-b-2 border-gray-300 pb-2">Past Events Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map(event => (
              <EventCard key={event.id} event={event} onRsvpClick={() => {}} />
            ))}
          </div>
        </div>
      )}
      
      <div className="py-12 bg-gray-100 rounded-lg">
        <SectionHeader title="Event Testimonials" subtitle="Hear about the impact of our gatherings."/>
        <TestimonialCarousel testimonials={TESTIMONIALS_DATA.filter(t => t.event)} />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`RSVP for ${selectedEventTitle}`}>
        <RsvpForm eventTitle={selectedEventTitle} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default EventsPage;
