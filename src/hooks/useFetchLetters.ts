import { useState, useEffect } from 'react';
import { fetchLetterFromAPI } from '../services/api/index';

// This hook is used to fetch the letter from the API.
const useFetchLetter = (checkboxNumber: number, isActive: boolean) => {
  const [letters, setLetters] = useState('');

  useEffect(() => {
    let intervalId: number;

    const updateLetters = async () => {
      const newLetter = await fetchLetterFromAPI(checkboxNumber);
      if (newLetter) {
        // This is used to limit the number of letters to 30.
        setLetters((prevLetters) => (prevLetters + newLetter).slice(-30));
      }
    };

    // This is used to start and stop the interval.
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
