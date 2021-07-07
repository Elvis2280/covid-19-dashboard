import React from 'react';

const TotalsCard = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-blue-dark flex flex-col items-center text-blue-verylight p-2 rounded`}
    >
      {children}
    </div>
  );
};

export default TotalsCard;
