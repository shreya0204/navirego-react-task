const CheckBoxes = () => {
  return (
    <div className="w-4/12 px-10 mt-10">
      <h1 className="text-2xl font-semibold border-b-2 border-gray-300 py-4">
        Select checkbox from here
      </h1>
      <div className="flex flex-col items-start mt-8">
        <label className="text-xl">
          <input className="m-2 h-7 w-7 outline-none" type="checkbox" />
          Checkbox number
        </label>
      </div>
    </div>
  );
};

export default CheckBoxes;
