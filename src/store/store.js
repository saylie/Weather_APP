import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from '../reducer/WeatherReducer'

const store = configureStore({
    reducer: {
        WeatherReducer
    }
})

export default store