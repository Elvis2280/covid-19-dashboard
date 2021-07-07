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

  return (
    <div className="col-span-3 row-span-2 bg-blue-dark grid grid-rows-3 p-2 rounded gap-y-4">
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
