import React from 'react';

const TotalsCard = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-red-light flex flex-col items-center text-red-dark p-2`}
    >
      {children}
    </div>
  );
};

export default TotalsCard;
