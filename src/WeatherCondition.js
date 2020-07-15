import React from 'react';


// import compass from 'icon/icon-compass.png';
// import umberella from 'icon/icon-umberella.png';
// import wind from 'icon/icon-wind.png';

import compass from './assets/icons/icon-compass.png';
import umberella from './assets/icons/icon-umberella.png';
import wind from './assets/icons/icon-wind.png';

class WeatherCondition extends React.Component {
  
    render() {

      const {cityName} = this.props;
      const {current} = this.props;
      const {unit} = this.props;

        return (
            <section className="weather-condition">
                <div className="weather-condition__location">{cityName}</div>
                <div className="weather-condition__overview">Clear</div>
                <div className="weather-condition__temp">{unit==="C" ? current.maxCelsius : current.maxFahrenheit} {unit}</div>
                <div className="weather-condition__desc">
                    <div>
                        <img src={umberella} alt="test"/>
                        <span className="citem">{current.humidity}%</span>
                    </div>
                    <div>
                        <img src={wind} alt="test"/>
                        <span className="citem">{current.windSpeed} km/h</span>
                    </div>
                    <div>
                        <img src={compass} alt="test"/>
                        <span className="citem">{current.windDirection}</span>
                    </div>
                </div>
            </section>
        );
    }
  }



export default WeatherCondition;