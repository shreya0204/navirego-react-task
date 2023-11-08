import Header from './components/Header';
import CheckBoxes from './components/CheckBoxes';
import Letters from './components/Letters';
import { useState } from 'react';

type CheckBoxState = {
  checked: boolean;
  index: number;
};

function App() {
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState<CheckBoxState[]>(
    Array.from({ length: 7 }, () => ({ checked: false, index: 0 })),
  );

  const handleCheckBoxChange = (checkboxIndex: number) => {
    setIsCheckBoxChecked((prevStates) =>
      prevStates.map((state, index) => {
        if (index === checkboxIndex) {
          return {
            ...state,
            checked: !state.checked,
          };
        }
        return state;
      }),
    );
  };

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
            {isCheckBoxChecked.map((state) => (
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
