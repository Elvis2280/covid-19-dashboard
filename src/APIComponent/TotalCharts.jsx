import React, { useEffect } from 'react';
import TotalVaccineChart from '../Components/TotalVaccineChart';
import diseaAPI from './diseaAPI';

const TotalCharts = () => {
  useEffect(() => {
    const getHistoryVaccine = async () => {
      const { data } = await diseaAPI.get('/vaccine/coverage', {
        params: {
          lastdays: 'all',
        },
      });

      console.log(data);
    };

    getHistoryVaccine();
  }, []);

  return (
    <div className="col-span-3 row-span-2 bg-red-light grid grid-rows-3">
      3
      <TotalVaccineChart />
    </div>
  );
};

export default TotalCharts;
