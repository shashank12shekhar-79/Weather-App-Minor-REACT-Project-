import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SunnyIcon from '@mui/icons-material/Sunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";
export default function InfoBox({info}) {
  let RAINY=import.meta.env.VITE_RAINY; 
  let COLD=import.meta.env.VITE_COLD; 
  let EXTREAME_COLD=import.meta.env.VITE_EXTREAME_COLD; 
  let HOT=import.meta.env.VITE_HOT; 

  return (
    <div className="InfoBox">
      <h2>Weather Info</h2>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80 ? RAINY : info.temp > 25 ? HOT :  info.temp > 20 ? COLD : EXTREAME_COLD }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temp > 20 ? <SunnyIcon/> : <SevereColdIcon/> }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>MaxTemp = {info.tempMax}&deg;C</p>
              <p>MinTemp = {info.tempMin}&deg;C</p>
              <p>
                The weather can be described as <b>{info.weather}</b> and feels
                like {info.feelsLike}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
