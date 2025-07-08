import React from 'react';


function CityImage({ avatarUrl, cityName }) {
  return (
    <img
      className="Flag"
      src={avatarUrl}
      alt={cityName}
    />
  );
}

function DisplayInfo({ city }) {
  return (
    <div className="DisplayInfo">
      <div className="CityInfo">
        <CityImage avatarUrl={city.avatarUrl} name={city.cityName} />
        <div className='CityInfo-city'>
            {city.cityName}
        </div>
        <div className="CityInfo-country">
            {city.country}
        </div>
        <div className="Foundation-year">
            {city.year}
        </div>
        </div>
    </div>
  );
}

export default DisplayInfo;


