import React from 'react';

const CountryInfo = ({ className, children }) => {
  return <div className={`${className} bg-red-light p-2`}>{children}</div>;
};

export default CountryInfo;
