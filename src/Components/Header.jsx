import React from 'react';

const Header = ({ title, name, icon }) => {
  return (
    <div className="bg-red-normal p-2 flex justify-between items-center">
      <p className="text-gray-100 text-lg">
        {name} <i class="las la-heart text-white text-xl"></i>
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
          <i class="lab la-github-alt text-white text-3xl mr-5"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;