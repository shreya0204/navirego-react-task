import Header from './components/Header';
import CheckBoxes from './components/CheckBoxes';
import Letters from './components/Letters';
import { useState } from 'react';

type CheckBoxState = {
  checked: boolean;
};

function App() {
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState<CheckBoxState[]>(
    Array.from({ length: 7 }, () => ({ checked: false })),
  );

  const handleCheckBoxChange = (index: number) => {
    const newCheckBoxState = [...isCheckBoxChecked];
    newCheckBoxState[index].checked = !newCheckBoxState[index].checked;
    setIsCheckBoxChecked(newCheckBoxState);
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
            <Letters />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
