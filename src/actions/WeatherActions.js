import {fetchWeatherDetails} from '../API/fetchweatherdetails'

export const setWeatherData = (data) =>{
    return{
        type:'SET_WEATHER_DATA',
        payload: data
    }
}
export const setWeatherError = (error) =>{
    return{
        type:'SET_WEATHER_ERROR',
        payload: error
    }
}

export const fetchWeather = (location) => async (dispatch) => {
    try {
        const response = await fetchWeatherDetails(location);
        dispatch(setWeatherData(response));
    } catch (error) {
        console.error('Error fetching weather data:', error);
        dispatch(setWeatherError(error));
    }
};


