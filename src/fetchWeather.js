const API_URL = import.meta.env.VITE_API_URL; 
const API_KEY = import.meta.env.VITE_API_KEY;
export default async function fetchWeatherInfo(city){
    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse)
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.temp_max,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
};
