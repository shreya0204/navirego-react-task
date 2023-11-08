import React, { useState, useEffect } from 'react';

interface LetterDisplayProps {
  checkboxNumber: number;
  isActive: boolean;
}

const LetterDisplay: React.FC<LetterDisplayProps> = ({
  checkboxNumber,
  isActive,
}) => {
  const [letters, setLetters] = useState('');

  useEffect(() => {
    let intervalId: any;

    const fetchLetter = async () => {
      try {
        const response = await fetch(
          `https://navirego-interview-mc3narrsb-volodymyr-matselyukh.vercel.app/api/letters/${checkboxNumber}`,
        );
        const data = await response.json();
        if (data.letter && typeof data.letter === 'string') {
          console.log(data.letter);

          setLetters((prevLetters) => {
            return (prevLetters + data.letter).slice(-30);
          });
        } else {
          console.error('Invalid response from the API:', data);
        }
      } catch (error) {
        console.error('Failed to fetch letter:', error);
      }
    };

    if (isActive) {
      intervalId = setInterval(fetchLetter, 2000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [checkboxNumber, isActive]);

  return (
    <div className="mt-8">
      {checkboxNumber} : {letters}
    </div>
  );
};

export default React.memo(LetterDisplay);
