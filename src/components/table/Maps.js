import React from 'react';
import { WorldMap } from 'react-svg-worldmap';
import '../styles/analytics.css';

function Maps() {
  const data = [
    { country: 'cn', value: 22 },
    { country: 'us', value: 88 },
    { country: 'ua', value: 273 },
    { country: 'br', value: 230 },
    { country: 'cl', value: 266 },
    { country: 'es', value: 483 },
    { country: 'it', value: 483 },
    { country: 'fr', value: 9433 },
    { country: 'jp', value: 32 },
    { country: 'mx', value: 1 },
    { country: 'se', value: 483 },
    { country: 'tj', value: 9999 },
    { country: 'ca', value: 288 },
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
      <WorldMap className='map' data={data} styleFunction={stylingFunction}  size="lg"/>
      <div>
        <ul className="maps_info">
          <li className="maps_info_inner">
            <span className="col"></span>1 - 51
          </li>
          <li className="maps_info_inner">
            <span className="col" style={{ backgroundColor: '#80ED99' }}></span>
            80 - 168
          </li>
          <li className="maps_info_inner">
            <span className="col" style={{ backgroundColor: '#57CC99' }}></span>
            228 - 269
          </li>
          <li className="maps_info_inner">
            <span className="col" style={{ backgroundColor: '#38A3A5' }}></span>
            483
          </li>
          <li className="maps_info_inner">
            <span className="col" style={{ backgroundColor: '#22577A' }}></span>
            9,333+
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Maps;
