
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Testimonial } from '../../types'; // Using Testimonial type as an example

interface CarouselProps {
  testimonials: Testimonial[]; // Or a more generic item type
  autoPlay?: boolean;
  interval?: number; // milliseconds
}

const Carousel: React.FC<CarouselProps> = ({ testimonials, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  }, [testimonials.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, handleNext, testimonials.length]);

  if (!testimonials || testimonials.length === 0) {
    return <p className="text-center text-gray-500">No items to display.</p>;
  }

  const currentItem = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl overflow-hidden">
      <div className="text-center transition-opacity duration-500 ease-in-out">
        <div className="mb-6 text-sky-600">
            <i className="fas fa-quote-left text-4xl opacity-50"></i>
        </div>
        <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6 min-h-[100px] md:min-h-[120px]">
          "{currentItem.quote}"
        </p>
        <p className="font-semibold text-slate-800 text-md">{currentItem.author}</p>
        {currentItem.event && <p className="text-sm text-gray-500"> terkait {currentItem.event}</p>}
      </div>

      {testimonials.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-slate-700 hover:bg-slate-900 text-white p-2 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-slate-700 hover:bg-slate-900 text-white p-2 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </>
      )}
      
      {testimonials.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-amber-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
            />
            ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
