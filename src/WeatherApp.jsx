import { useState,useEffect } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import fetchWeatherInfo from "./fetchWeather";
import './WeatherApp.css'
export default function WeatherApp()
{
    const [weatherInfo,setWeatherInfo] = useState({});
    useEffect(()=>{
        async function fetchWeather()
        {
            const info = await fetchWeatherInfo("kolkata");
            if(info)
            {
                setWeatherInfo(info);
            }
        }
        fetchWeather();
    },[]);
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign:"center"}}>
            <h3>Weather App</h3>
            <SearchBox updateInfo={updateInfo}/>
            {weatherInfo && <InfoBox info={weatherInfo} />}
        </div>
    );
}