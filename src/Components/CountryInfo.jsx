import React from 'react';

const CountryInfo = ({
  className,
  title,
  getTextInput,
  inputValue,
  children,
}) => {
  return (
    <div className={`${className} bg-red-light p-2`}>
      <h3 className="text-center text-red-dark font-semibold">{title}</h3>

      <div className="pt-3">
        <input
          type="text"
          className="w-full bg-red-500 placeholder-red-light text-white px-2 rounded outline-none mb-2 py-1"
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
