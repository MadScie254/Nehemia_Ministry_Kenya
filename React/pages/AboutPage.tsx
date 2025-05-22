
import React from 'react';
import SectionHeader from '../components/sections/SectionHeader';
import { FOUNDERS_INFO, CHURCH_HISTORY_TIMELINE, CHURCH_MISSION_VISION_DOCTRINE, FAQ_DATA } from '../constants';
import Accordion from '../components/ui/Accordion';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const FoundersSection: React.FC = () => (
  <section className="py-12 md:py-16">
    <SectionHeader title="Our Founders" subtitle={`${FOUNDERS_INFO.name}`} />
    <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
      <div className="md:col-span-2">
        <img 
          src={FOUNDERS_INFO.image} 
          alt={FOUNDERS_INFO.name} 
          className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
        />
      </div>
      <div className="md:col-span-3 text-gray-700 leading-relaxed">
        <p className="text-lg whitespace-pre-line">{FOUNDERS_INFO.bio}</p>
      </div>
    </div>
  </section>
);

const HistoryTimelineSection: React.FC = () => (
  <section className="py-12 md:py-16 bg-gray-100">
    <SectionHeader title="Our Journey of Faith" subtitle="Tracing God's faithfulness since 2006" />
    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-amber-300 transform -translate-x-1/2"></div>
      
      {CHURCH_HISTORY_TIMELINE.map((item, index) => (
        <div key={index} className="mb-8 md:mb-0 flex md:items-center w-full">
          {/* Desktop layout */}
          <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
            {index % 2 === 0 && (
              <div className="bg-white p-6 rounded-lg shadow-lg text-right max-w-md">
                <h4 className="text-xl font-semibold text-sky-700 mb-1">{item.year}</h4>
                <p className="text-gray-600">{item.event}</p>
              </div>
            )}
          </div>
          <div className="hidden md:flex relative w-10 h-10 bg-amber-500 rounded-full items-center justify-center text-white shadow-md transform -translate-x-1/2">
            <i className="fas fa-church"></i>
          </div>
          <div className={`hidden md:flex w-1/2 ${index % 2 !== 0 ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
             {index % 2 !== 0 && (
              <div className="bg-white p-6 rounded-lg shadow-lg text-left max-w-md">
                <h4 className="text-xl font-semibold text-sky-700 mb-1">{item.year}</h4>
                <p className="text-gray-600">{item.event}</p>
              </div>
            )}
          </div>
          
          {/* Mobile layout */}
          <div className="md:hidden w-full bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-500">
            <h4 className="text-xl font-semibold text-sky-700 mb-1">{item.year}</h4>
            <p className="text-gray-600">{item.event}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const MissionVisionDoctrineSection: React.FC = () => (
  <section className="py-12 md:py-16">
    <SectionHeader title="Our Beliefs & Calling" subtitle="The foundations of our ministry and service." />
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-amber-600 mb-3 flex items-center"><i className="fas fa-bullseye mr-3"></i>Mission</h3>
        <p className="text-gray-700 leading-relaxed">{CHURCH_MISSION_VISION_DOCTRINE.mission}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-amber-600 mb-3 flex items-center"><i className="fas fa-eye mr-3"></i>Vision</h3>
        <p className="text-gray-700 leading-relaxed">{CHURCH_MISSION_VISION_DOCTRINE.vision}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-3">
        <h3 className="text-2xl font-bold text-amber-600 mb-3 flex items-center"><i className="fas fa-book-open mr-3"></i>Core Doctrines</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
          {CHURCH_MISSION_VISION_DOCTRINE.doctrine.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const StatsSection: React.FC = () => (
  <section className="py-12 md:py-16 bg-slate-800 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-4xl font-extrabold mb-1 text-amber-400"><AnimatedCounter targetValue={18} />+</div>
        <p className="text-lg">Years of Ministry</p>
      </div>
      <div>
        <div className="text-4xl font-extrabold mb-1 text-amber-400"><AnimatedCounter targetValue={20} />+</div>
        <p className="text-lg">Churches Planted</p>
      </div>
      <div>
        <div className="text-4xl font-extrabold mb-1 text-amber-400"><AnimatedCounter targetValue={3} /></div>
        <p className="text-lg">Core Institutions</p>
      </div>
      <div>
        <div className="text-4xl font-extrabold mb-1 text-amber-400"><AnimatedCounter targetValue={5000} />+</div>
        <p className="text-lg">Lives Impacted Annually</p>
      </div>
    </div>
  </section>
);

const FAQSection: React.FC = () => (
  <section className="py-12 md:py-16">
    <SectionHeader title="Frequently Asked Questions" />
    <div className="max-w-3xl mx-auto">
      <Accordion items={FAQ_DATA.map(item => ({ title: item.question, content: item.answer }))} />
    </div>
  </section>
);


const AboutPage: React.FC = () => {
  return (
    <>
      <FoundersSection />
      <HistoryTimelineSection />
      <MissionVisionDoctrineSection />
      <StatsSection />
      <FAQSection />
    </>
  );
};

export default AboutPage;
