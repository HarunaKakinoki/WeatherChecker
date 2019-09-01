import React from 'react';
import WeatherChecker from '../WeatherChecker/WeatherChecker';
import './Layout.css';


const layout = (props) => (
    <div className="Default">
        <header>
            <h1>Weather Checker</h1>
        </header>
        
        <main>
            <WeatherChecker />
        </main>
        
        <footer>
            <span>Copyright © 2019 Haruna Kakinoki</span>
        </footer>
    </div>
);

export default layout;