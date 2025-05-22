
import React, { useState } from 'react';
import SectionHeader from '../components/sections/SectionHeader';
import { GALLERY_IMAGES_DATA } from '../constants';
import { GalleryImage } from '../types';
import Modal from '../components/ui/Modal';

const GalleryGridItem: React.FC<{ image: GalleryImage; onClick: () => void }> = ({ image, onClick }) => (
  <div 
    className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer aspect-square"
    onClick={onClick}
  >
    <img 
      src={image.src} 
      alt={image.alt} 
      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <i className="fas fa-search-plus text-3xl mb-2"></i>
        {image.caption && <p className="text-sm font-semibold">{image.caption}</p>}
      </div>
    </div>
  </div>
);

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SectionHeader title="Ministry Gallery" subtitle="Moments of faith, fellowship, and service captured." />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {GALLERY_IMAGES_DATA.map(image => (
          <GalleryGridItem key={image.id} image={image} onClick={() => openModal(image)} />
        ))}
      </div>

      {/* Optional Video Content Section Placeholder */}
      {/* 
      <div className="mt-16">
        <SectionHeader title="Video Highlights" subtitle="Watch key moments and messages." />
        <div className="grid md:grid-cols-2 gap-8">
          // Placeholder for video embeds
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">Video 1</div>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">Video 2</div>
        </div>
      </div> 
      */}

      {selectedImage && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedImage.caption || selectedImage.alt} size="xl">
          <img src={selectedImage.src} alt={selectedImage.alt} className="w-full max-h-[80vh] object-contain rounded-md"/>
          {selectedImage.caption && <p className="mt-4 text-center text-gray-700">{selectedImage.caption}</p>}
        </Modal>
      )}
    </>
  );
};

export default GalleryPage;
