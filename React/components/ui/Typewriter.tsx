
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  loop?: boolean;
  delayBetweenTexts?: number;
  className?: string;
  cursorClassName?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  loop = false,
  delayBetweenTexts = 1500,
  className = '',
  cursorClassName = 'animate-pulse',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textsToDisplay = Array.isArray(text) ? text : [text];

  useEffect(() => {
    if (textsToDisplay.length === 0) return;

    const currentPhrase = textsToDisplay[currentTextIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        } else {
          // Finished typing current phrase
          if (textsToDisplay.length > 1 || loop) {
            setTimeout(() => setIsDeleting(true), delayBetweenTexts);
          }
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        } else {
          // Finished deleting
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % textsToDisplay.length);
          if (!loop && currentTextIndex === textsToDisplay.length - 1 && textsToDisplay.length > 1) {
            // Stop if not looping and it's the last text
            return;
          }
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, speed, textsToDisplay, currentTextIndex, loop, delayBetweenTexts]);

  return (
    <span className={className}>
      {displayedText}
      <span className={`ml-1 ${cursorClassName}`}>|</span>
    </span>
  );
};

export default Typewriter;
