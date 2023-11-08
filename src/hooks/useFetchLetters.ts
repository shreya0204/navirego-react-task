import { useState, useEffect } from 'react';
import { fetchLetterFromAPI } from '../services/api/index';

const useFetchLetter = (checkboxNumber: number, isActive: boolean) => {
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
      clearInterval(intervalId);
    };
  }, [checkboxNumber, isActive]);

  return letters;
};

export default useFetchLetter;
