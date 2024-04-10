import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({weatherInfo}){
    const IMG_URL="https://unsplash.com/photos/a-group-of-people-flying-a-kite-in-the-sky-FAplWxaP8B0";

    const COLD_URL="https://upload.wikimedia.org/wikipedia/commons/8/81/A_cold_area_with_smoke_of_cold_around.jpg";

    const HOT_URL="https://th.bing.com/th/id/OIP.vahjp-Vd2LzUwnaXvFTobgHaFj?w=900&h=675&rs=1&pid=ImgDetMain";

    const RAINY_URL="https://th.bing.com/th/id/OIP.nX5pnQxG3pc9ZHizFdW2SgHaEK?rs=1&pid=ImgDetMain";
    // let info= {
    //     city:"Pune",
    //     temp:36.36,
    //     temp_max:36.36,
    //     temp_min:36.36,
    //     humidity:14,
    //     weather_desp:"few clouds",
    //     feels_like:35.03
    // };
    return(
        <div>
            <h3>WeatherInfo - {weatherInfo.weather_desp}</h3>
            <div className="Weather_Info">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={weatherInfo.humidity>80 ? RAINY_URL : weatherInfo.temp>15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {weatherInfo.city}&nbsp;{
                            weatherInfo.humidity>80 ? <ThunderstormIcon></ThunderstormIcon> : weatherInfo.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature : {weatherInfo.temp}&deg;C</p>
                        <p>Humidity : {weatherInfo.humidity}</p>
                        <p>Min Temp : {weatherInfo.temp_min}&deg;C</p>
                        <p>Max Temp : {weatherInfo.temp_max}&deg;C</p>
                        <p>The Weather can be described as {weatherInfo.weather_desp} and feels like = {weatherInfo.feels_like}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>

        </div>
    )
}