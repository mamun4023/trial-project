import React,{useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import {useDispatch, useSelector} from 'react-redux';
// load action
import {canada_current_weather_data} from '../../redux/weather/actions';
import './index.css';




const options = {
  scales: {
    y: {
      stacked: true,
      ticks: {
        beginAtZero: true
      }
    },
    x: {
      stacked: true
    }
  }
};

function StackedBar(){
   
    const apiData = useSelector(state => state.data);
    const dispatch = useDispatch();
    const loading =  useSelector(state => state.loading);
    
    useEffect(()=> {
        dispatch(canada_current_weather_data());
    }, [])



 
const data = {
  labels: ['Max', 'Min', 'Avg', 'Humidigy', 'cloud'],
  datasets: [
    {
      label: 'Forecast',
      data: [
              apiData.forecast.forecastday[0].day.maxtemp_c,
              apiData.forecast.forecastday[0].day.mintemp_c,
              apiData.forecast.forecastday[0].day.avgtemp_c, 
              apiData.forecast.forecastday[0].hour[0].humidity, 
              apiData.forecast.forecastday[0].hour[0].cloud, 
            ],
      backgroundColor: '#3B3B98',
    }
  ],
};

  return(
  <>
    <div className='header'>
      <h4 className='p-2 bg-dark text-white'> Weather parameters </h4>
    </div>
    <div className = "graph-container">
      <Bar data={data} options={options} />
    </div>
  </>
  )
}

export default StackedBar;