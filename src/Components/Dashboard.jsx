import React from 'react';
import TotalCountryAPI from '../APIComponent/TotalCountryAPI';
import TotalsCardAPI from '../APIComponent/TotalsCardAPI';
import TotalCharts from '../APIComponent/TotalCharts';

const Dashboard = () => {
  const totalKeys = ['vaccine', 'deaths', 'cases', 'recovered', 'active'];
  return (
    <div className="grid grid-cols-10 customRowGrid gap-2 flex-1 overflow-hidden">
      <TotalsCardAPI totalKeys={totalKeys} />
      <TotalCountryAPI />
      <div className="col-span-5 row-span-2 bg-gray-300"> 2 </div>
      <TotalCharts />
    </div>
  );
};

export default Dashboard;
