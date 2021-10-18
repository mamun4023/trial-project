import {
    FETCH_API_REQUEST,
    FETCH_API_SUCCESS,
    FETCH_API_FAILURE
} from "./types";

import axios from 'axios';

const fetch_API_Request = ()=> {
    return{
        type : FETCH_API_REQUEST
    }
}

const fetch_API_Success = data => {
    return{
        type : FETCH_API_SUCCESS,
        payload : data
    }
}

const fetch_API_Failure = error => {
    return{
        type : FETCH_API_FAILURE,
        payload : error
    }
}

// canada current weather data fetch
export const canada_current_weather_data = ()=> {
    return(dispatch) => {
        
        dispatch(fetch_API_Request)
        axios.get(`${process.env.REACT_APP_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=canada`)
            .then(res => {
                const data1 = res.data
                dispatch(fetch_API_Success(data1));
            })
            .catch(err => {
                const errMsg = err.message
                dispatch(fetch_API_Failure(errMsg))
            })
    }
}
