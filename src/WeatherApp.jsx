import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo, SetWeatherInfo]=useState({
        city:"Pune",
        temp:36.36,
        temp_max:36.36,
        temp_min:36.36,
        humidity:14,
        weather_desp:"few clouds",
        feels_like:35.03
    })

    let weatherInfoByApi = (info) =>{
        SetWeatherInfo(info);
    }

    return (
        <>
        <h1>Weather App</h1>
        <SearchBox weatherInfoByApi={weatherInfoByApi}/>
        <InfoBox weatherInfo={weatherInfo}/>
        </>
    )
}