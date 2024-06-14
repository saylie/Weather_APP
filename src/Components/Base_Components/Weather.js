import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import WeatherDisplay from './WeatherDisplay';
import { fetchWeather } from '../../actions/WeatherActions';

const Weather = () => {
    const [city, setCity] = useState('');
    const [radio1,setRadio1] = useState(true);
    const [radio2,setRadio2] = useState(false);
    const [zipcode, setZipcode] = useState ('');

    const dispatch = useDispatch();

    const handleFormSubmit = async (event) =>{
        event.preventDefault();
        // try {
        //     const response = await fetchWeatherDetails(city? city : zipcode);
        //     setWeatherData(response);
        // } catch (error) {
        //     console.error('Error fetching weather data:', error);
        // }
        event.preventDefault();
        dispatch(fetchWeather(city ? city : zipcode));
    }

    const handleZipcode = (event) =>{
        setZipcode(event.target.value);
        setCity('');
    }

    const handleCity = (event) =>{
        setCity(event.target.value);
        setZipcode('')
    }
    return(
        <>
            <Form onSubmit={handleFormSubmit}>
                <label style={{margin: "10px"}} htmlFor="city-input">Enter a city:</label>
                <input style={{margin: "10px"}} type="radio" checked={radio1} onChange={() => setRadio1(!radio1) + setRadio2(!radio2)}/>
                <label style={{margin: "10px"}} htmlFor="zipcode-input">Enter a zipcode:</label>
                <input style={{margin: "10px"}} type="radio" checked={radio2} onChange={() => setRadio2(!radio2) + setRadio1(!radio1)}/>
                {!radio1 ?
                     <input style={{margin:"10px"}} type={'number'} id="zipcode-input" value={zipcode} onChange={(event)=>handleZipcode(event)} /> :
                     <input style={{margin:"10px"}} type={ 'text'} id="city-input" value={city} onChange={(event)=>handleCity(event)} />
                }
                <Button style={{margin:"10px"}} type="submit">Get weather</Button>
            </Form>
            {/* <WeatherDisplay weatherData={weatherData} ></WeatherDisplay> */}
            <WeatherDisplay></WeatherDisplay>
        </>
    )
}

export default Weather