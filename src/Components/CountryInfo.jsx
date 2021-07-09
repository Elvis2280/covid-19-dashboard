import React from 'react';

const CountryInfo = ({
  className,
  title,
  getTextInput,
  inputValue,
  children,
}) => {
  return (
    <div className={`${className} bg-blue-dark p-2 rounded`}>
      <h3 className="text-center text-blue-verylight font-semibold">{title}</h3>

      <div className="pt-3 flex justify-center">
        <input
          type="text"
          className="bg-gray-100 w-4/5 placeholder-red-light text-blue-verydark px-2 rounded outline-none mb-3 py-1"
          placeholder="Search ..."
          onChange={(e) => getTextInput(e)}
          value={inputValue}
        />
      </div>
      {children}
    </div>
  );
};

export default CountryInfo;
