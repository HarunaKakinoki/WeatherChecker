import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import Result from '../../components/Result/Result';
import axios from 'axios';

class WeatherChecker extends Component {
    state = {
        key : process.env.REACT_APP_API_KEY,
        weatherURI :'https://dataservice.accuweather.com/currentconditions/v1/',
        cityURI :'https://dataservice.accuweather.com/locations/v1/cities/search',
        cityInfo: [],
        weatherInfo: [],
        initialRender: true
    }

    //Return City & Weather information by accessing API.
    getInfoForUpdate = (location) => {
        const query = `?apikey=${this.state.key}&q=${location}`;

        axios.get(this.state.cityURI + query, {
            headers: {
                'Content-Type': 'application/json' 
            },
            responseType: 'json'
        })
        .then( response => this.setState({ cityInfo: response.data[0]})) //Get city info & set state.
        .then(() => this.getWeatherInfo(this.state.cityInfo.Key)) //Get weather info by city id & set state.
        .catch(error => console.log(error));
    }

    getWeatherInfo = (id) => {
        const query = `${id}?apikey=${this.state.key}`;

        axios.get(this.state.weatherURI + query, {
            headers: {
                'Content-Type': 'application/json' 
            },
            responseType: 'json'
        })
        .then( response => this.setState({ weatherInfo:response.data[0]}))
        .catch(error => console.log(error));
    }

    render () {
        let weatherInfo = null;
        let errorMessage = null;

        //Check Infomation from API is fetched or not.
        if(this.state.cityInfo !== undefined && this.state.weatherInfo.length !== 0) {
            weatherInfo = 
            <Result 
                cityName={this.state.cityInfo.EnglishName}
                weatherIconNum={this.state.weatherInfo.WeatherIcon}
                weather={this.state.weatherInfo.WeatherText}
                temperature={this.state.weatherInfo.Temperature.Metric.Value}
            />
        } else if(this.state.cityInfo === undefined){
            //Show error message.
            errorMessage = <p>The City name does not exist</p>;
        }

        return (
            <div>
                <Form fetchWeatherInfo={this.getInfoForUpdate} />
                {weatherInfo}
                {errorMessage}
            </div>
        );
    }
}

export default WeatherChecker;