import React from "react";
import { Col, Row } from 'react-bootstrap';
import { useSelector } from "react-redux";

const WeatherDisplay = () =>{
    const weatherData = useSelector((state) => state.WeatherReducer.weatherData)
    const error = useSelector((state) => state.WeatherReducer.error)
    return(
        <> 
        { error ? (
            <p>Error fetching weather data: {error}</p>
        ):(
         weatherData ? (
            <>
                <h3 style={{margin: "10px"}} >Weather details for : {weatherData.name}</h3>
                <Row style={{marginTop:'10px'}} lg={12}>
                    <Col lg={2}>
                        <h6><strong>Temperature</strong></h6>
                    </Col>
                    <Col lg={2}>
                        <h6><strong>Pressure</strong></h6>
                    </Col>
                    <Col lg={2}>
                        <h6><strong>Humidity</strong></h6>
                    </Col>
                    <Col lg={2}>
                        <h6><strong>Co-ordination</strong></h6>
                    </Col>
                    <Col lg={2}>
                        <h6><strong>Wind Speed</strong></h6>
                    </Col>
                    <Col lg={2}>
                        <h6><strong>Wind Degree</strong></h6>
                    </Col>
                </Row>
                <Row lg={12}>
                    <Col lg={2}>
                        <p> {weatherData.main.temp}</p>
                    </Col>
                    <Col lg={2}>
                        <p> {weatherData.main.pressure}</p>
                    </Col>
                    <Col lg={2}>
                        <p> {weatherData.main.humidity}</p>
                    </Col>
                    <Col lg={2}>
                        <p> {weatherData.coord.lat}</p>
                        <p> {weatherData.coord.lon}</p>
                    </Col>
                    <Col lg={2}>
                        <p> {weatherData.wind.speed}</p>
                    </Col>
                    <Col lg={2}>
                        <p> {weatherData.wind.deg}</p>
                    </Col>
                </Row>
            </>
            ) : (
                <p>No weather data to display</p>
            )
        )} 
        </>
    )
}

export default WeatherDisplay 