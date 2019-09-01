import React from 'react';
import Aux from '../../containers/hoc/Auxiliary';
import './Form.css';

class Form extends React.Component {
    state = {
        userInput: ''
    }

    inputValueHandler = () => {
        this.setState({
            userInput: this.refs.location.value
        }, ()=> {
            this.props.fetchWeatherInfo(this.state.userInput)
        })

         //Initialize text value.
        this.refs.location.value='';
        
    }

    render () {
        return (
            <Aux>
                <input type="text" placeholder="Type location..." ref="location"/>
                <button type="submit" onClick={this.inputValueHandler}>Checked</button>
            </Aux>
        );
    }
}

export default Form;