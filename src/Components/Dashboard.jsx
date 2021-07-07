import React from 'react';
import TotalCountryAPI from '../APIComponent/TotalCountryAPI';
import TotalsCardAPI from '../APIComponent/TotalsCardAPI';
import TotalChartsAPI from '../APIComponent/TotalChartsAPI';
import ShowMap from './ShowMap';

const Dashboard = () => {
  const totalKeys = ['vaccine', 'deaths', 'cases', 'recovered', 'active'];
  return (
    <div className="grid grid-cols-10 customRowGrid gap-2 flex-1 overflow-hidden">
      <TotalsCardAPI totalKeys={totalKeys} />
      <TotalCountryAPI />
      <ShowMap />
      <TotalChartsAPI />
    </div>
  );
};

export default Dashboard;
