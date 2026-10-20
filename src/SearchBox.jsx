import { useState } from "react";
import './SearchBox.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import fetchWeatherInfo from "./fetchWeather";
export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [err,setError] = useState(false);
    let handleCity = (event)=>{
        setCity(event.target.value);
    };
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo= await fetchWeatherInfo(city);
            updateInfo(newInfo);
        }catch(err)
        {
            setError(true);
        }
    };
    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city" 
                    value={city}
                    onChange={handleCity}
                    label="city name" 
                    variant="outlined" 
                    required />
                <br /> <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {err && <p style={{color : "red"}}>"Api Failure occured OR No such place Exist"</p>}
            </form>
        </div>
    )
};