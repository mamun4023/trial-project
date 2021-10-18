import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {canada_current_weather_data} from '../../redux/weather/actions';
import "./index.css";

function Container(){
    const canadaData = useSelector(state => state.data);
    const dispatch = useDispatch();
    const loading =  useSelector(state => state.loading);
    
    useEffect(()=> {
        dispatch(canada_current_weather_data());
    }, [])

    if(loading){
    	return <h1> loading... </h1>
    }

    return (
        <>
        <h4 className = "p-2 m-0 text-white bg-dark" > Current Weather</h4>
        <div  className = "today-weather-container">
            
            <div className ="today-detail">
                <h2> {canadaData.location.country }  </h2>
                <h3> Today's Weather </h3>
                 <p>Maximum</p> 
                 { canadaData.forecast.forecastday[0].day.maxtemp_c } <sup> o C </sup>
                 <p>Minimum</p>
                 {canadaData.forecast.forecastday[0].day.mintemp_c  } <sup> o C </sup>
                 <p>{canadaData.forecast.forecastday[0].day.condition.text}</p>
                 <img src = {canadaData.forecast.forecastday[0].day.condition.icon} />
            </div>

        </div>
     </>
       
    )
}

export default Container;