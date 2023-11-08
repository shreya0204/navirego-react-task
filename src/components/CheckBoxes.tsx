import { CheckBoxState } from '../hooks/useCheckBoxState';

interface CheckBoxesProps {
  isCheckBoxChecked: CheckBoxState[];
  onCheckBoxChange: (index: number) => void;
}

const CheckBoxes: React.FC<CheckBoxesProps> = ({
  isCheckBoxChecked,
  onCheckBoxChange,
}) => {
  return (
    <div className=" w-fit xl:w-4/12 px-10 mt-10">
      <h1 className="text-2xl font-semibold border-b-2 border-gray-300 py-4">
        Select checkbox from here
      </h1>
      <div className="flex flex-col items-start mt-8">
        {isCheckBoxChecked.map((state: any, index: any) => (
          <label key={index} className="text-xl">
            <input
              className=" m-2 w-4 h-4 md:h-7 md:w-7 outline-none"
              type="checkbox"
              checked={state.checked}
              onChange={() => onCheckBoxChange(index)}
            />
            Checkbox number {index}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxes;
