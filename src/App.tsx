import Header from './components/Header';
import CheckBoxes from './components/CheckBoxes';
import Letters from './components/Letters';
import { useState, useRef } from 'react';
import { getSortedActiveCheckboxes } from './utils/sortOrder';

type CheckBoxState = {
  checked: boolean;
  order: number | null;
};

function App() {
  const orderCounter = useRef(0);
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState<CheckBoxState[]>(
    Array.from({ length: 7 }, () => ({ checked: false, order: null })),
  );

  const handleCheckBoxChange = (checkboxIndex: number) => {
    setIsCheckBoxChecked((prevStates) =>
      prevStates.map((state, index) => {
        if (index === checkboxIndex) {
          return {
            ...state,
            checked: !state.checked,
            order: state.checked ? null : orderCounter.current++,
          };
        }
        return state;
      }),
    );
  };

  const sortedCheckBoxes = getSortedActiveCheckboxes(isCheckBoxChecked);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-row w-full">
        <CheckBoxes
          isCheckBoxChecked={isCheckBoxChecked}
          onCheckBoxChange={handleCheckBoxChange}
        />
        <div className="w-4/12 h-full flex flex-col px-10 mt-10">
          <h1 className="text-2xl font-semibold border-b-2 border-gray-300 py-4">
            Desired Result
          </h1>
          <div className="mt-8">
            {sortedCheckBoxes.map((state) => (
              <Letters
                key={state.index}
                checkboxNumber={state.index}
                isActive={state.checked}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
