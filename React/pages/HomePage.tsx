
import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Typewriter from '../components/ui/Typewriter';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import SectionHeader from '../components/sections/SectionHeader';
import { MINISTRIES_DATA, EVENTS_DATA, SERMONS_DATA, TESTIMONIALS_DATA } from '../constants';
import TestimonialCarousel from '../components/ui/Carousel'; // Assuming Carousel is TestimonialCarousel

const HeroSection: React.FC = () => (
  <div className="relative bg-gradient-to-br from-slate-900 via-sky-800 to-blue-900 text-white py-20 md:py-32 overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <img src="https://picsum.photos/seed/hero-bg/1920/1080" alt="Abstract background" className="w-full h-full object-cover"/>
    </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        Welcome to <span className="text-amber-400">Nehemia Ministry</span> Kenya
      </h1>
      <div className="text-xl sm:text-2xl text-gray-200 mb-8 h-16 sm:h-20 flex items-center justify-center">
        <Typewriter 
          text={["Transforming Lives, Building Hope.", "Experience God's Love and Power.", "Join a Community of Faith."]} 
          loop={true} 
          speed={70}
          delayBetweenTexts={2500}
          className="block"
        />
      </div>
      <div className="space-x-4">
        <Button to="/about" variant="primary" size="lg" iconRight={<i className="fas fa-arrow-right"></i>}>
          Learn More
        </Button>
        <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
          Visit Us
        </Button>
      </div>
    </div>
  </div>
);

const AboutSummarySection: React.FC = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="About Nehemia Ministry" subtitle="Founded in faith, serving with love since 2006." />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://picsum.photos/seed/founders-home/600/400" alt="Founders Bishop David & Rev. Selina Walukhu" className="rounded-lg shadow-xl w-full"/>
        </div>
        <div className="text-gray-700 leading-relaxed">
          <p className="mb-4">
            Nehemia Ministry Kenya was founded in 2006 by Bishop David Walukhu and Reverend Selina Walukhu in Mukhonje, Kakamega County. Driven by a divine vision to spread the Gospel and uplift communities, the ministry has grown significantly, touching countless lives through spiritual nourishment, education, healthcare, and compassionate outreach.
          </p>
          <p className="mb-6">
            Our core belief is in the transformative power of God's love and Word. We are committed to making disciples, strengthening families, and building a vibrant community of faith that impacts Kenya and beyond.
          </p>
          <Button to="/about" variant="secondary">Discover Our Story</Button>
        </div>
      </div>
    </div>
  </section>
);

const MinistriesPreviewSection: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Our Core Ministries" subtitle="Serving God by serving His people in diverse ways." />
      <div className="grid md:grid-cols-3 gap-8">
        {MINISTRIES_DATA.slice(0,3).map(ministry => (
          <Card key={ministry.id} title={ministry.name} imgSrc={ministry.image} imgAlt={ministry.name}>
            <p className="text-gray-600 mb-4 text-sm">{ministry.description}</p>
            <Button to={`/ministries#${ministry.id}`} variant="primary" size="sm">Learn More</Button>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const EventsPreviewSection: React.FC = () => {
  const upcomingEvents = EVENTS_DATA.filter(event => event.isUpcoming).slice(0, 2);
  return (
    <section className="py-16 bg-sky-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Upcoming Events" subtitle="Join us for fellowship, growth, and outreach." />
        {upcomingEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map(event => (
              <Card key={event.id} imgSrc={event.image} imgAlt={event.title}>
                <h3 className="text-xl font-semibold text-sky-700 mb-1">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-1"><i className="fas fa-calendar-alt mr-2"></i>{event.date} - {event.time}</p>
                <p className="text-sm text-gray-500 mb-3"><i className="fas fa-map-marker-alt mr-2"></i>{event.location}</p>
                <p className="text-gray-600 text-sm mb-4">{event.description.substring(0,100)}...</p>
                <Button to="/events" variant="secondary" size="sm">View Details</Button>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No upcoming events at the moment. Please check back soon!</p>
        )}
         <div className="text-center mt-8">
            <Button to="/events" variant="primary" size="md">View All Events</Button>
          </div>
      </div>
    </section>
  );
};

const SermonHighlightSection: React.FC = () => {
  const highlightSermon = SERMONS_DATA[0];
  if (!highlightSermon) return null;

  return (
    <section className="py-16">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Message from the Word" subtitle="Be inspired and strengthened by recent teachings." />
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src={highlightSermon.videoUrl} 
                title={highlightSermon.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">{highlightSermon.title}</h3>
            <p className="text-gray-600 mb-1">Speaker: {highlightSermon.speaker}</p>
            <p className="text-sm text-gray-500 mb-4">Date: {highlightSermon.date}</p>
            <p className="text-gray-700 mb-6">
              Dive into this powerful message that explores {highlightSermon.tags.join(', ')}. Find encouragement and guidance for your daily walk.
            </p>
            <Button to="/sermons" variant="primary">Watch More Sermons</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const ImpactSection: React.FC = () => (
  <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Our Impact" subtitle="By God's grace, making a difference." alignment="center" className="text-white" />
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-5xl font-extrabold mb-2">
            <AnimatedCounter targetValue={5000} duration={2000} />+
          </div>
          <p className="text-lg font-medium">Lives Touched Annually</p>
        </div>
        <div>
          <div className="text-5xl font-extrabold mb-2">
            <AnimatedCounter targetValue={20} duration={2000} />+
          </div>
          <p className="text-lg font-medium">Branch Churches Planted</p>
        </div>
        <div>
          <div className="text-5xl font-extrabold mb-2">
            <AnimatedCounter targetValue={300} duration={2000} />+
          </div>
          <p className="text-lg font-medium">Students Educated & Trained</p>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsPreviewSection: React.FC = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Words from Our Community" subtitle="Hear what people are saying about Nehemia Ministry."/>
      <TestimonialCarousel testimonials={TESTIMONIALS_DATA} />
    </div>
  </section>
);


const MapLocationSection: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Find Our Main Church" subtitle="Located in Mukhonje, Kakamega County. We'd love to welcome you!" />
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
        {/* Placeholder for Google Map Embed */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.673700989351!2d34.88071961475716!3d0.2910919998430105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781d4f3aa7c582b%3A0x9d5a4789ea9b8d43!2sKakamega!5e0!3m2!1sen!2ske!4v1626868900000!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style={{ border:0 }} 
          allowFullScreen={true} 
          loading="lazy"
          title="Nehemia Ministry Location Map"
        ></iframe>
      </div>
      <div className="text-center mt-8">
        <Button href="https://www.google.com/maps/dir/?api=1&destination=0.2910919,34.8807196" variant="secondary">Get Directions</Button>
      </div>
    </div>
  </section>
);


const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSummarySection />
      <MinistriesPreviewSection />
      <ImpactSection />
      <SermonHighlightSection />
      <EventsPreviewSection />
      <TestimonialsPreviewSection />
      <MapLocationSection />
    </>
  );
};

export default HomePage;
