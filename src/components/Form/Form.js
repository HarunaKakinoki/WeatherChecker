import React from 'react';
import './Form.css';

class Form extends React.Component {
    state = {
        userInput: ''
    }

    inputValueHandler = () => {
        this.setState({
            userInput: this.refs.location.value
        }, ()=> {
            console.log(this.state.userInput)
            this.props.fetchWeatherInfo(this.state.userInput)
        })

         //Clear text value.
        this.refs.location.value='';
    }

    render () {
        return (
            <div>
                <input type="text" placeholder="Type city name..." ref="location"/>
                <button type="submit" onClick={this.inputValueHandler}>Check</button>
            </div>
        );
    }
}

export default Form;