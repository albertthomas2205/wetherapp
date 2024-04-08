import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState({
    main:{},
    weather:[{}]
  });
  const [city, setCity] = useState('Kochi');
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?&appid=e42374b2c87d0a626bc8b608ef898efa&q=${city},India&units=metric`);
        console.log(response.data)
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city]);
  return (
    <div className="App">

      <div className="App-header ">:
      
        <div className='border border-black   px-2 py-1 shadow-lg backdrop-blur-sm rounded-lg overflow-hidden'>
          <div>
          <h1 className="font-bold p-5 text-4xl text-white text-center">Weather App</h1>

          </div>
          <div className='p-4'>
          <input 
    type="text" 
    value={city} 
    onChange={handleCityChange} 
    className="border backdrop-blur-sm rounded-lg px-2 py-1 mb-4  text-white placeholder-white bg-[rgba(0,0,0,0.1)]"
    placeholder="Enter city name"  
/>
          </div>
          <div className='p-[2rem]'>
          <h1 className='text-4xl font-bold mb-4'>{weatherData?weatherData.name:""}</h1>
          <h1 className=' mb-2'>{`${Math.round(weatherData.main.temp)}`}&deg;C</h1>
          <h1 className=' mb-2'>{weatherData.weather[0].main}</h1>
          <h1 className=' mb-2'>{weatherData.weather[0].description}</h1>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
