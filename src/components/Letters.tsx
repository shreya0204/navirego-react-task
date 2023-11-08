import React, { useState, useEffect } from 'react';

interface LetterProps {
  checkboxNumber: number;
}

const LetterDisplay: React.FC<LetterProps> = ({ checkboxNumber }) => {
  const [letters, setLetters] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch(
          `https://navirego-interview-mc3narrsb-volodymyr-matselyukh.vercel.app/api/letters/${checkboxNumber}`,
        );
        const data = await response.json();
        setLetters(data.letter);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [checkboxNumber]);

  //   console.log(letters[0]);

  return (
    <div className="mt-8">
      <p>{letters}</p>
    </div>
  );
};

export default LetterDisplay;
