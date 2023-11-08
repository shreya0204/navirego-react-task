import Header from './components/Header';
import CheckBoxes from './components/CheckBoxes';
import Letters from './components/Letters';
import { getSortedActiveCheckboxes } from './utils/sortOrder';
import { useCheckboxState } from './hooks/useCheckBoxState';

function App() {
  const { isCheckBoxChecked, handleCheckBoxChange } = useCheckboxState(7);
  const sortedCheckBoxes = getSortedActiveCheckboxes(isCheckBoxChecked);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col sm:flex-row w-full">
        <CheckBoxes
          isCheckBoxChecked={isCheckBoxChecked}
          onCheckBoxChange={handleCheckBoxChange}
        />
        <div className="h-full flex flex-col px-10 mt-10">
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
