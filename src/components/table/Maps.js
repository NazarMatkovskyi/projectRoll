import React from 'react';
import { WorldMap } from 'react-svg-worldmap';
import '../styles/analytics.css';

function Maps() {
  const data = [
    { country: 'cn', value: 22 },
    { country: 'us', value: 88 },
    { country: 'ua', value: 88 },
    { country: 'br', value: 230 },
    { country: 'cl', value: 266 },
    { country: 'es', value: 483 },
    { country: 'it', value: 483 },
    { country: 'fr', value: 9433 },
    { country: 'jp', value: 32 },
    { country: 'mx', value: 1 },
    { country: 'se', value: 483 },
    { country: 'tj', value: 9999 },
  ];

  const stylingFunction = (data) => {
    const fillColor =
      (data.countryValue === undefined && '#082D45') ||
      (data.countryValue >= 1 && data.countryValue < 80 && '#082D45') ||
      (data.countryValue >= 80 && data.countryValue < 168 && '#80ED99') ||
      (data.countryValue >= 168 && data.countryValue < 269 && '#57CC99') ||
      (data.countryValue >= 270 && data.countryValue <= 483 && '#38A3A5') ||
      (data.countryValue > 483 && '#22577A');

    return {
      fill: fillColor,
      stroke: '#fff',
      fillColor: '#082D45',
      strokeWidth: 1,
      strokeOpacity: 0.2,
      cursor: 'pointer',
      color: '#082D45',
    };
  };

  return (
    <div className="maps">
      <WorldMap data={data} styleFunction={stylingFunction} />
    </div>
  );
}

export default Maps;
