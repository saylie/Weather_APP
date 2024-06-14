const initialState = {
    weatherData: null,
    error: null
}

const WeatherReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_WEATHER_DATA':
            return{
                ...state, 
                weatherData: action.payload,
                error: null
            };
        case 'SET_WEATHER_ERROR':
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default WeatherReducer;