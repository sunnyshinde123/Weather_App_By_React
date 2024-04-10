import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function({weatherInfoByApi}){
    let [searchValue, setSearchValue]=useState("");
    let [error, setError]=useState(false);

    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="879dee36b80619aa99a5312921318dda";

    let searchWeather=(event)=>{
        setSearchValue(event.target.value);
    }

    let weatherInfo = async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${searchValue}&appid=${API_KEY}&units=metric`);
            let data=await response.json();
            console.log(data);
            let result={
                city:searchValue,
                temp:data.main.temp,
                temp_min:data.main.temp_min,
                temp_max:data.main.temp_max,
                humidity:data.main.humidity,
                feels_like:data.main.feels_like,
                weather_descp:data.weather[0].description
            }
            return result;
        }catch(err){
            throw err;
        }
    }

    let handleSubmit = async(event) =>{
        try{
            event.preventDefault();
            console.log(searchValue);
            setSearchValue("");
            let info=await weatherInfo();
            weatherInfoByApi(info);
            setError(false);
        }catch(err){
            setError(true);
        }
    }

    return(
        <div className='SearchBox'>
            <h3>Search for Weather</h3>
            <form action="/" onSubmit={handleSubmit}>
                <TextField id="city" label="City" variant="outlined" required value={searchValue} onChange={searchWeather}/>
                <br /><br />
                <Button variant="contained" type='Submit'>Search</Button>
                <br />
                {error && <p style={{color:"red"}}>No Such place exists</p>}
            </form>
        </div>
    )
}