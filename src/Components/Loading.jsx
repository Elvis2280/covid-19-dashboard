import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex flex-col items-center">
      <Loader type="Hearts" height={60} width={60} color="#ded9ff" />
      <p className="text-center text-blue-verylight">Loading...</p>
    </div>
  );
};

export default Loading;
