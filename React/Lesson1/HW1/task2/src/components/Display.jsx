import React, { Component } from 'react';

//Поменял функциональные компоненты на классовые
class CityImage extends Component {
  render() {
    const { avatarUrl, cityName } = this.props;
    return (
      <img
        className="Flag"
        src={avatarUrl}
        alt={cityName}
      />
    );
  }
}

class DisplayInfo extends Component {
  render() {
    const { city } = this.props;

    return (
      <div className="DisplayInfo">
        <div className="CityInfo">
          <CityImage avatarUrl={city.avatarUrl} cityName={city.cityName} />
          <div className="CityInfo-city">
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
}

export default DisplayInfo;
