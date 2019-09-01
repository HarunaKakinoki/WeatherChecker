import React, { Component } from 'react';
import Aux from '../hoc/Auxiliary';
import Form from '../../components/Form/Form';
import Result from '../../components/Result/Result';
//import axios from 'axios';

class WeatherChecker extends Component {
    fetchCityInfo  = (location) => {
        console.log(location);
    }

    render () {
        return (
            <Aux>
                <Form fetchWeatherInfo={this.fetchCityInfo}/>
                <Result />
            </Aux>
        );
    }
}

export default WeatherChecker;