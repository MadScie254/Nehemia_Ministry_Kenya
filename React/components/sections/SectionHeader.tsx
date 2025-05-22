
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, alignment = 'center', className = '' }) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment];

  return (
    <div className={`mb-8 md:mb-12 ${alignmentClass} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
