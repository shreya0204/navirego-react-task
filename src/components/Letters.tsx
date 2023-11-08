import React, { memo } from 'react';
import useFetchLetter from '../hooks/useFetchLetters';

interface LettersProps {
  checkboxNumber: number;
  isActive: boolean;
}

const LetterDisplay: React.FC<LettersProps> = ({
  checkboxNumber,
  isActive,
}) => {
  const letters = useFetchLetter(checkboxNumber, isActive);

  return (
    <div className="mt-8">
      {checkboxNumber} : {letters}
    </div>
  );
};

export default memo(LetterDisplay);
