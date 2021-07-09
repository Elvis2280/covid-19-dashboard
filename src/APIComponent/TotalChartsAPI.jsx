import React, { useEffect, useState } from 'react';
import TotalVaccineChart from '../Components/TotalVaccineChart';
import diseaAPI from './diseaAPI';

const TotalChartsAPI = () => {
  const [dateVaccine, setDateVaccine] = useState([]);
  const [casesDaily, setCasesDaily] = useState([]);
  const [deathsDaily, setDeathsDaily] = useState([]);

  // convert from a object to a array with objects inside with a key name
  const objToArray = (data, typeData) => {
    let box = [];
    let lastValue = 0;
    if (typeData === 'vaccine') {
      for (const [date, vaccine] of Object.entries(data)) {
        box.push({ date: date, [typeData]: vaccine });
      }
    } else {
      for (const [date, vaccine] of Object.entries(data)) {
        box.push({ date: date, [typeData]: vaccine - lastValue });
        lastValue = vaccine;
      }
    }

    return box;
  };

  useEffect(() => {
    const getHistoryVaccine = async () => {
      const { data } = await diseaAPI.get('/vaccine/coverage', {
        params: {
          lastdays: 'all',
        },
      });

      setDateVaccine(objToArray(data, 'vaccine'));
    };

    getHistoryVaccine();
  }, []);

  useEffect(() => {
    const dailyDeaths_Cases = async () => {
      const { data } = await diseaAPI.get('/historical/all', {
        params: {
          lastdays: 'all',
        },
      });

      setCasesDaily(objToArray(data.cases, 'cases'));
      setDeathsDaily(objToArray(data.deaths, 'deaths'));
    };

    dailyDeaths_Cases();
  }, []);
  //col-span-3 row-span-2
  return (
    <div className="bg-blue-dark grid lg:grid-rows-3 auto-rows-auto grid-cols-1 lg:grid-cols-1 p-2 rounded col-start-1 col-span-10 row-start-2 gap-y-4 sm:col-start-4 sm:col-span-7 sm:row-start-1 row-end-3 lg:col-start-8 lg:col-span-full lg:flex lg:flex-col">
      <TotalVaccineChart
        data={dateVaccine}
        title="Total vaccine dosis"
        dataKey="vaccine"
      />
      <TotalVaccineChart
        data={casesDaily}
        title="Daily cases"
        dataKey="cases"
      />
      <TotalVaccineChart
        data={deathsDaily}
        title="Daily deaths"
        dataKey="deaths"
      />
    </div>
  );
};

export default TotalChartsAPI;
