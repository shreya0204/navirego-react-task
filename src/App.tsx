import Header from './components/Header';
import CheckBoxes from './components/CheckBoxes';
import Letters from './components/Letters';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-row w-full">
        <CheckBoxes />
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
