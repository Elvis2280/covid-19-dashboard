import React, { useState } from 'react';
import TotalsCard from '../Components/TotalsCard';
import diseaAPI from './diseaAPI';
import { useQuery } from 'react-query';

import Error from '../Components/Error';
import Loading from '../Components/Loading';

const TotalsCardAPI = ({ totalKeys }) => {
  const [option, setOption] = useState('vaccine');

  //because vaccine is other api this check if option is vaccione for make api vaccine request otherwise make the request to all data
  const { isSuccess, isLoading, isError, data } = useQuery(
    ['totalInfo', option],
    async () => {
      if (option === 'vaccine') {
        const { data } = await diseaAPI.get('/vaccine/coverage', {
          params: { lastdays: 1 },
        });
        return data[Object.keys(data)[0]];
      } else if (option !== 'vaccine') {
        const { data } = await diseaAPI.get('/all');
        console.log(data[option]);
        return data[option];
      }
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  //Handle buttoms next or previous info option if next button get limit in the array, reset to position to start, same with the preovious buttom
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
    <TotalsCard className="col-start-1 col-span-10 row-start-1 row-end-2 sm:col-span-3 lg:col-span-2">
      {isSuccess && (
        <>
          <p className="font-bold text-center">
            Total <span className="text-white">{option}</span>{' '}
            {option === 'vaccine' ? 'administered' : 'by covid-19'}
          </p>
          <p className="font-bold text-2xl my-2">
            {new Intl.NumberFormat().format(data)}
          </p>
          <div className="flex items-center w-3/4 justify-center bg-blue-verydark rounded">
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
        </>
      )}

      {isLoading && <Loading />}

      {isError && <Error />}
    </TotalsCard>
  );
};

export default TotalsCardAPI;
