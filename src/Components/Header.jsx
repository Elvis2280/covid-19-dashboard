import React from 'react';

const Header = ({ title, name, icon }) => {
  return (
    <div className="p-2 bg-blue-verydark flex justify-between items-center mb-2 rounded">
      <p className="text-gray-100 text-lg">
        {name} <i className="las la-heart text-white text-xl"></i>
      </p>
      <h1 className="text-gray-100 text-center text-xl font-bold tracking-wide">
        {title}
      </h1>
      <div>
        <a
          href="https://github.com/Elvis2280/covid-19-dashboard/tree/master"
          rel="noreferrer"
          target="_blank"
        >
          {' '}
          <i className="lab la-github-alt text-white text-3xl mr-5"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
