
import React, { useEffect } from 'react';

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children, className = '' }) => {
  useEffect(() => {
    document.title = `${title} | Nehemia Ministry Kenya`;
  }, [title]);

  return (
    <div className={`py-8 md:py-12 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
