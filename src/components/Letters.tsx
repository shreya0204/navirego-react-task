import React, { useState, useEffect } from 'react';
import { fetchLetterFromAPI } from '../services/api';

interface LettersProps {
  checkboxNumber: number;
  isActive: boolean;
}

const LetterDisplay: React.FC<LettersProps> = ({
  checkboxNumber,
  isActive,
}) => {
  const [letters, setLetters] = useState('');

  useEffect(() => {
    let intervalId: number;

    const updateLetters = async () => {
      const newLetter = await fetchLetterFromAPI(checkboxNumber);
      if (newLetter) {
        setLetters((prevLetters) => (prevLetters + newLetter).slice(-30));
      }
    };

    if (isActive) {
      intervalId = window.setInterval(updateLetters, 2000);
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

export default LetterDisplay;
