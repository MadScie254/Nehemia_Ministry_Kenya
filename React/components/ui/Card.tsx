
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  title?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', imgSrc, imgAlt, title, onClick }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {imgSrc && (
        <img className="w-full h-48 object-cover" src={imgSrc} alt={imgAlt || title || 'Card image'} />
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export default Card;
