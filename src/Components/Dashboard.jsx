import React from 'react';
import CountryInfo from './CountryInfo';
import TotalsCard from './TotalsCard';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-10 grid-rows-2 gap-2">
      <TotalsCard className="col-start-1 col-end-3 row-start-1 row-span-1">
        <p className="font-bold">
          Total <span className="text-gray-100">Vaccine</span>
        </p>
        <p className="font-bold text-3xl my-2">874,278,983</p>

        <div className="flex items-center">
          <span>
            <i class="las la-caret-left text-2xl cursor-pointer"></i>
          </span>
          <p className="px-3 text-gray-100">Vaccine</p>
          <span>
            <i class="las la-caret-right text-2xl cursor-pointer"></i>
          </span>
        </div>
      </TotalsCard>

      <CountryInfo className="row-start-2 row-span-1 col-start-1 col-end-3 bg-gray-300">
        4
      </CountryInfo>

      <div className="col-span-5 row-span-2 bg-gray-300">2</div>

      <div className="col-span-3 row-span-2 bg-gray-300">3</div>
    </div>
  );
};

export default Dashboard;
