import React from 'react';
import './Result.css';

const result = (props) => (
   <div className="Result">
       <h2>{props.cityName}</h2>
       <img className="TimeIcon" src={props.timeIcon} alt="time-icon" />
       <p>{props.weather}</p>
       <p>{props.temperature} &deg; C</p>
       <img src={props.weatherIcon} alt="weather icon" />
   </div>
);

export default result;