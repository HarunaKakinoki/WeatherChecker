import React from 'react';
import './Result.css';

const result = (props) => (
   <div className="Result">
       <h2>{props.cityName}</h2>
       <img src={require(`../../assets/images/icons/${props.weatherIconNum}.svg`)} alt="weather icon" />
       <p>{props.weather}</p>
       <p>{props.temperature} &deg; C</p>
   </div>
);

export default result;