import React, { Component } from 'react';
import Aux from '../hoc/Auxiliary';
import Form from '../../components/Form/Form';
import Result from '../../components/Result/Result';
import axios from 'axios';
import dayIcon from '../../assets/images/day.svg';
import nightIcon from '../../assets/images/night.svg';
const API_KEY = process.env.REACT_APP_API_KEY;

class WeatherChecker extends Component {
    state = {
        key : API_KEY,
        weatherURI :'https://dataservice.accuweather.com/currentconditions/v1/',
        cityURI :'https://dataservice.accuweather.com/locations/v1/cities/search',
        cityInfo: [],
        weatherInfo: []
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

        //Check Infomation from API is fetched or not.
        if(this.state.cityInfo !== undefined && this.state.weatherInfo.length !== 0) {
            let timeIconSrc = null;
           
            //Set time icon src(Daytime or Night).
            if(this.state.weatherInfo.IsDayTime) {
                timeIconSrc = dayIcon;
            } else {
                timeIconSrc = nightIcon;
            }
            
            //Set weather icon.
            let weatherIconSrc = '../assets/images/icons/' + this.state.weatherInfo.WeatherIcon + '.svg';
            
            weatherInfo = 
            <Result 
                cityName={this.state.cityInfo.EnglishName}
                timeIcon={timeIconSrc}
                weather={this.state.weatherInfo.WeatherText}
                temperature={this.state.weatherInfo.Temperature.Metric.Value}
                weatherIcon={weatherIconSrc}
            />
        } 
    
        return (
            <Aux>
                <Form fetchWeatherInfo={this.getInfoForUpdate}/>
                {weatherInfo}
            </Aux>
        );
    }
}

export default WeatherChecker;