
import React from 'react';
import SectionHeader from '../components/sections/SectionHeader';
import { MINISTRIES_DATA } from '../constants';
import { Ministry } from '../types';
import Button from '../components/ui/Button';

const MinistrySection: React.FC<{ ministry: Ministry, index: number }> = ({ ministry, index }) => (
  <section id={ministry.id} className={`py-12 md:py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
          <img 
            src={ministry.image} 
            alt={ministry.name} 
            className="rounded-lg shadow-xl w-full object-cover aspect-video"
          />
        </div>
        <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
          <h3 className="text-3xl font-bold text-sky-700 mb-4">{ministry.name}</h3>
          <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">{ministry.longDescription}</p>
          <Button to="/contact" variant="primary" iconRight={<i className="fas fa-hands-helping"></i>}>
            Get Involved with {ministry.name.split(' ')[0]}
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const MinistriesPage: React.FC = () => {
  return (
    <>
      <SectionHeader 
        title="Our Ministries" 
        subtitle="Dedicated to serving God and community through diverse avenues of impact." 
      />
      <div className="space-y-0"> {/* Removes space between sections if any applied by PageWrapper */}
        {MINISTRIES_DATA.map((ministry, index) => (
          <MinistrySection key={ministry.id} ministry={ministry} index={index} />
        ))}
      </div>
      <section className="py-12 md:py-16 bg-amber-500 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-4">Partner With Us</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
                Your support enables us to continue these vital ministries and expand our reach. Consider partnering with us through prayer, volunteering, or financial giving.
            </p>
            <Button to="/give" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-600">
                Support Our Ministries
            </Button>
        </div>
      </section>
    </>
  );
};

export default MinistriesPage;
