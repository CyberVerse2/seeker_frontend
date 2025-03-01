import React, { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface ScrambleButtonProps {
  text: string;
  className?: string;
}

const ScrambleButton: React.FC<ScrambleButtonProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  const characters =
    '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isHovering) {
      let iteration = 0;
      const maxIterations = 10;

      intervalId = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split('')
            .map((_, index) => {
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        iteration += 1 / 3;

        if (iteration >= maxIterations) {
          clearInterval(intervalId);
          setDisplayText(text);
        }
      }, 20);
    } else {
      setDisplayText(text);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovering, text]);

  return (
    <Link
      to="https://docs.google.com/forms/d/e/1FAIpQLSdXH7QdAL0HtJ1L3uaUNPrpNxxOjayljtQZkZjssTw6c_Cs6g/viewform?usp=dialog"
      target="_blank"
      rel="noopener noreferrer"
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
      <FaChevronRight size={12} />
    </Link>
  );
};

export default ScrambleButton;
