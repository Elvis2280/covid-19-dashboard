import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import L from 'leaflet';
import { Marker } from 'react-leaflet';
import FormatNumber from '../utility/FormatNumber';

const MapIcon = ({ text, children, lat, long }) => {
  const iconDesign = renderToStaticMarkup(
    <div className="bg-red-600 w-8 h-8 shadow text-white flex justify-center items-center rounded-full">
      <p className="font-small font-semibold">{FormatNumber(text)}</p>
    </div>,
  );

  const icon = L.divIcon({
    html: iconDesign,
  });

  return (
    <Marker position={[lat, long]} icon={icon}>
      {' '}
      {children}{' '}
    </Marker>
  );
};

export default MapIcon;
