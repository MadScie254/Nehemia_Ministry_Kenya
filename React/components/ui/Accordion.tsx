
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-colors"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <span>{title}</span>
          {isOpen ? <ChevronUpIcon className="w-5 h-5 text-amber-500" /> : <ChevronDownIcon className="w-5 h-5 text-gray-500" />}
        </button>
      </h2>
      {isOpen && (
        <div className="p-5 border-t border-gray-200 bg-gray-50">
          <div className="text-gray-600 leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
};


interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
  allowMultipleOpen?: boolean;
  defaultOpenIndex?: number | number[];
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultipleOpen = false, defaultOpenIndex }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(() => {
    if (defaultOpenIndex === undefined) return [];
    return Array.isArray(defaultOpenIndex) ? defaultOpenIndex : [defaultOpenIndex];
  });

  const handleToggle = (index: number) => {
    setOpenIndexes(prevIndexes => {
      if (allowMultipleOpen) {
        return prevIndexes.includes(index)
          ? prevIndexes.filter(i => i !== index)
          : [...prevIndexes, index];
      } else {
        return prevIndexes.includes(index) ? [] : [index];
      }
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
