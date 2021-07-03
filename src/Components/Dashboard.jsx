import React from 'react';
import TotalsCardAPI from '../APIComponent/TotalsCardAPI';
import CountryInfo from './CountryInfo';

const Dashboard = () => {
  const totalKeys = ['vaccine', 'deaths', 'cases', 'recovered', 'active'];
  return (
    <div className="grid grid-cols-10 grid-rows-2 gap-2">
      <TotalsCardAPI totalKeys={totalKeys} />

      <CountryInfo className="row-start-2 row-span-1 col-start-1 col-end-3 bg-gray-300">
        <h3 className="text-center">
          <span className="text-blue-800 font-bold">Cases</span> and{' '}
          <span className="text-red-normal  font-bold">Death</span> by country
        </h3>

        <div className="pt-3">
          <input type="text" className="bg-gray-100 w-full outline-none" />
        </div>
      </CountryInfo>

      <div className="col-span-5 row-span-2 bg-gray-300">2</div>

      <div className="col-span-3 row-span-2 bg-gray-300">3</div>
    </div>
  );
};

export default Dashboard;
