import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountryInfo from '../Components/CountryInfo';
import diseaAPI from './diseaAPI';

const TotalCountryAPI = () => {
  const [countryData, setCountryData] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getTextInput = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const getAllCountryData = async () => {
      const { data } = await diseaAPI.get('/countries');

      data.forEach(async (country) => {
        let countryCode = country.countryInfo.iso2;
        if (countryCode !== null) {
          const { data } = await axios.get(
            `https://restcountries.eu/rest/v2/alpha/${countryCode}`,
            {},
          );
          country.country = data.name;
        }
      });

      setCountryData(data);
    };
    getAllCountryData();
  }, []);

  const countries = countryData.map((country, i) => {
    if (searchText.length !== 0) {
      return country.country.toLowerCase().indexOf(searchText.toLowerCase()) !==
        -1 ? (
        <div
          className="grid grid-cols-6 auto-rows-max my-1 bg-blue-verydark rounded p-2 text-white"
          key={country.countryInfo._id === null ? i : country.countryInfo._id}
        >
          <div className="col-start-1 col-span-2 flex items-center mr-2 row-start-1 row-end-2">
            <img src={country.countryInfo.flag} alt={country.country} />
          </div>
          <div className=" col-start-3 col-span-4">
            <div className="flex flex-col justify-around">
              <p>C: {new Intl.NumberFormat().format(country.cases)}</p>
              <p>D: {new Intl.NumberFormat().format(country.deaths)}</p>
            </div>
          </div>
          <div className="col-start-1 col-span-6 row-start-2 row-end-3">
            <p className="text-left truncate ">{country.country}</p>
          </div>
        </div>
      ) : null;
    } else {
      return (
        <div
          className="grid grid-cols-6 auto-rows-max my-1 bg-blue-verydark rounded text-white p-2"
          key={country.countryInfo._id === null ? i : country.countryInfo._id}
        >
          <div className="col-start-1 col-span-2 flex items-center mr-2 row-start-1 row-end-2">
            <img src={country.countryInfo.flag} alt={country.country} />
          </div>
          <div className=" col-start-3 col-span-4">
            <div className="flex flex-col justify-around">
              <p>C: {new Intl.NumberFormat().format(country.cases)}</p>
              <p>D: {new Intl.NumberFormat().format(country.deaths)}</p>
            </div>
          </div>
          <div className="col-start-1 col-span-6 row-start-2 row-end-3">
            <p className="text-left truncate ">{country.country}</p>
          </div>
        </div>
      );
    }
  });

  return (
    <CountryInfo
      getTextInput={getTextInput}
      inputValue={searchText}
      title="Cases and Deaths by country"
      className="col-start-1 col-span-10 row-start-3 countries__aside overflow-hidden sm:row-start-2 sm:row-end-3 sm:col-span-3 lg:col-span-2"
    >
      <div className="h-full overflow-y-auto">
        {countries.every((element) => element === null) ? (
          <p className="text-left text-xl text-blue-verylight">
            We couldn't find the country{' '}
            <i className="las la-heart-broken text-5xl block text-center"></i>
          </p>
        ) : (
          countries
        )}
      </div>
    </CountryInfo>
  );
};

export default TotalCountryAPI;
