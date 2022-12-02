import './index.css';
import moment from "moment";

let WeatherCard = ({date, temp, min, max}) => {
  return (
   <div className='container'> 
    <div className='card'>
        <h1>{temp}°C</h1>
        <div>{moment (date).format("MMMM Do YYYY, h:mm:ss a")}</div>
        <div> <b>Min:</b> {min}°C <br/> <b> Max: </b>{max}°C</div>
      
    </div>
    </div>
  );
}

export default WeatherCard;
