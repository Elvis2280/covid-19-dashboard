import React from 'react';
import TotalVaccineChart from '../Components/TotalVaccineChart';
import diseaAPI from './diseaAPI';
import { useQuery } from 'react-query';
import Error from '../Components/Error';
import Loading from '../Components/Loading';

const TotalChartsAPI = () => {
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

  const chartDataRequest = async (url, typeData) => {
    const { data } = await diseaAPI.get(url, {
      params: {
        lastdays: 'all',
      },
    });

    if (typeData !== 'vaccine') {
      return objToArray(data[typeData], typeData);
    }
    return objToArray(data, typeData);
  };

  // API request for different data
  const {
    data: vaccineData,
    isError: isVaccineError,
    isLoading: isVaccineLoading,
  } = useQuery(
    ['vacineChartData'],
    () => chartDataRequest('/vaccine/coverage', 'vaccine'),
    {
      refetchOnWindowFocus: false,
    },
  );
  const {
    data: deathsData,
    isError: isDeathsError,
    isLoading: isDeathsLoading,
  } = useQuery(
    ['deathsChartData'],
    () => chartDataRequest('/historical/all', 'deaths'),
    {
      refetchOnWindowFocus: false,
    },
  );
  const {
    data: casesData,
    isError: isCasesError,
    isLoading: isCasesLoading,
  } = useQuery(
    ['casesChartData'],
    () => chartDataRequest('/historical/all', 'cases'),
    {
      refetchOnWindowFocus: false,
    },
  );

  //Check if chart is loading, error or success. show every state
  const buildChart = (isLoading, isError, data, dataKey, title) => {
    if (isLoading) {
      return <Loading />;
    }

    if (isError) {
      return <Error />;
    }

    return <TotalVaccineChart data={data} title={title} dataKey={dataKey} />;
  };

  return (
    <div className="bg-blue-dark grid lg:grid-rows-3 auto-rows-auto grid-cols-1 lg:grid-cols-1 p-2 rounded col-start-1 col-span-10 row-start-2 gap-y-4 sm:col-start-4 sm:col-span-7 sm:row-start-1 row-end-3 lg:col-start-8 lg:col-span-full lg:flex lg:flex-col">
      {/* Call the buildchart function, every chart with their title datakey and data */}
      {buildChart(
        isCasesLoading,
        isCasesError,
        casesData,
        'cases',
        'Daily cases',
      )}

      {buildChart(
        isDeathsLoading,
        isDeathsError,
        deathsData,
        'deaths',
        'Daily deaths',
      )}

      {buildChart(
        isVaccineLoading,
        isVaccineError,
        vaccineData,
        'vaccine',
        'Total vaccine dosis',
      )}
    </div>
  );
};

export default TotalChartsAPI;
