import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import diseaAPI from '../APIComponent/diseaAPI';
import MapIcon from './MapIcon';
import FormatNumber from '../utility/FormatNumber';

const ShowMap = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getAllCountryData = async () => {
      const { data } = await diseaAPI.get('/countries');
      setCountries(data);
    };

    getAllCountryData();
  }, []);

  const mapMarks = countries.map((country) => {
    return (
      <MapIcon
        text={country.cases}
        lat={country.countryInfo.lat}
        long={country.countryInfo.long}
      >
        <Tooltip className="bg-gray-300">
          <div className="flex justify-around items-center flex-col">
            <img
              className="w-2/4 h-auto"
              src={country.countryInfo.flag}
              alt=""
            />
            <span className="font-semibold">{country.country}</span>
          </div>
          <span className="my-1 block ">
            {' '}
            <span className="font-semibold">Confirmed: </span>
            {FormatNumber(country.cases)}
          </span>
          <span className="my-1 block ">
            <span className="font-semibold">Deaths: </span>{' '}
            {FormatNumber(country.deaths)}
          </span>
          <span className="my-1 block">
            <span className="font-semibold">Recovered: </span>{' '}
            {FormatNumber(country.recovered)}
          </span>
        </Tooltip>
      </MapIcon>
    );
  });

  return (
    <div className="col-span-5 row-span-2 bg-blue-dark rounded">
      <MapContainer
        center={[8.752900594999996, -82.87873458499998]}
        zoom={2}
        className="h-full rounded"
      >
        <TileLayer
          attribution='&copy;  <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
          url="https://api.mapbox.com/styles/v1/maped2280/ckqr6z9xs2axw18pj82p0vhvm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFwZWQyMjgwIiwiYSI6ImNrcXI3NHRmcDFiaXUyb3A1eGh0dGV2bDEifQ.9OYTtIw85NvEgGE-f1U6og"
        />
        {mapMarks}
      </MapContainer>
    </div>
  );
};

export default ShowMap;
