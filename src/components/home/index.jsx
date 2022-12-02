import './index.css';
import axios from 'axios'
import { useState } from 'react';
import WeatherCard from "././weathercard"

let Home = () => {
    const [cityName, setCityName] = useState("");
    const [data, setData] = useState([]);


    let submitHandler = async (e) => {
        e.preventDefault();
        console.log("I am submit handler function")

        try {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=937f80e92149ebb98d7149e4a305dfe3&units=metric`)
            console.log("response:", response);

            setData(response.data.list)
        } catch (error) {
            console.log("error in api call: ", error);
        }



    }












    return (
        <div >
            <h1><i>WEATHER APP</i></h1>
            <form onSubmit={submitHandler}>
                <p> <input type="text" className='input'
                    placeholder="Please Enter your city name here !!"
                    onChange={(e) => {
                        // console.log(e.target.value);
                        setCityName(e.target.value);
                    }}
                    required /></p>
                <button type='submit'><i>Get your city Weather ..</i></button>
            </form>



            {
                //     data.map((eachForcast, index) => (
                //         <div key={index}>
                //         <div>{eachForcast.dt_txt}</div>
                //         <h1>{eachForcast.main.temp}</h1>
                //         <div>{eachForcast.main.temp_min} - {eachForcast.main.temp_max}</div>


                //      </div>
                //     )
                // )
                data.map((eachForcast, index) => (
                    <WeatherCard
                        key={index}
                        date={eachForcast.dt_txt}
                        temp={eachForcast.main.temp}
                        min={eachForcast.main.temp_min}
                        max={eachForcast.main.temp_max} />
                ))
            }



        </div>
    );
}

export default Home;
