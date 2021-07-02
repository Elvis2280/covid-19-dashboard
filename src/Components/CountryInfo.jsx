import React from 'react';

const CountryInfo = ({ className, children }) => {
  return <div className={`${className} bg-red-light`}>{children}</div>;
};

export default CountryInfo;
