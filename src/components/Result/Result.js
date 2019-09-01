import React from 'react';
import './Result.css';

const result = (props) => (
   <div className="Result">
       <h2>{props.location}</h2>
       <p>{props.weather}</p>
       <p>{props.degree} &deg; C</p>
       <img src="#" alt=""></img>
   </div>
);

export default result;