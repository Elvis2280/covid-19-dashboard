import React, { useState, useEffect } from 'react';
import TotalsCard from '../Components/TotalsCard';
import diseaAPI from './diseaAPI';

const TotalsCardAPI = ({ totalKeys }) => {
  const [totalData, setTotalData] = useState(null);
  const [option, setOption] = useState('vaccine');

  useEffect(() => {
    const covidAll = async () => {
      if (option === 'vaccine') {
        const { data } = await diseaAPI.get('/vaccine/coverage', {
          params: { lastdays: 1 },
        });
        setTotalData(data[Object.keys(data)[0]]);
      } else if (option !== 'vaccine') {
        const { data } = await diseaAPI.get('/all');
        console.log(data);
        setTotalData(data[option]);
      }
    };

    covidAll();
  }, [option]);

  const selectOption = (e) => {
    const data = totalKeys;
    const index = data.indexOf(option);
    if (e.target.id === 'previous_option') {
      index === 0
        ? setOption(data[data.length - 1])
        : setOption(data[index - 1]);
    } else if (e.target.id === 'next_option') {
      index === data.length - 1
        ? setOption(data[0])
        : setOption(data[index + 1]);
    }
  };

  return (
    <TotalsCard className="col-start-1 col-end-3 row-start-1 row-span-1">
      <p className="font-bold text-center">
        Total <span className="text-white">{option}</span>{' '}
        {option === 'vaccine' ? 'administered' : 'by covid-19'}
      </p>
      <p className="font-bold text-2xl my-2">
        {new Intl.NumberFormat().format(totalData)}
      </p>

      <div className="flex items-center w-full justify-center bg-blue-verydark rounded">
        <span onClick={(e) => selectOption(e)}>
          <i
            className="las la-caret-left text-2xl cursor-pointer"
            id="previous_option"
          ></i>
        </span>
        <p className="px-1 text-white w-2/4 text-center">
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </p>
        <span onClick={(e) => selectOption(e)}>
          <i
            className="las la-caret-right text-2xl cursor-pointer"
            id="next_option"
          ></i>
        </span>
      </div>
    </TotalsCard>
  );
};

export default TotalsCardAPI;
