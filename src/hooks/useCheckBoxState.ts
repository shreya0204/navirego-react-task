import { useState, useRef } from 'react';

export type CheckBoxState = {
  checked: boolean;
  order: number | null;
};

// This hook is used to keep track of the checkbox state.
export const useCheckboxState = (count: number) => {
  const orderCounter = useRef(0);
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState<CheckBoxState[]>(
    Array.from({ length: count }, () => ({
      checked: false,
      order: null,
    })),
  );

  // This function is triggered when the checkbox is clicked. Updating the state and the order of the checkbox.
  const handleCheckBoxChange = (checkboxIndex: number) => {
    setIsCheckBoxChecked((prevStates) =>
      prevStates.map((state, index) => {
        if (index === checkboxIndex) {
          return {
            ...state,
            checked: !state.checked,
            order: !state.checked ? orderCounter.current++ : null,
          };
        }
        return state;
      }),
    );
  };
  return { isCheckBoxChecked, handleCheckBoxChange };
};
