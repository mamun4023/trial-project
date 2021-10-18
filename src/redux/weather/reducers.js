import {
    FETCH_API_REQUEST,
    FETCH_API_SUCCESS,
    FETCH_API_FAILURE
} from "./types";

const initialState = {
    loading : true,
    data : [],
    error : ''
}

 const Reducer1 = (state = initialState, action) => {
    switch(action.type){
       case FETCH_API_REQUEST : 
            return{
                ...state,
                loading : true
            }
        
        case FETCH_API_SUCCESS:
            return{
                loading : false,
                data : action.payload,
                error : ""
            }
            
        case FETCH_API_FAILURE:
            return{
                loading : false,
                data: [],
                error : action.payload
            }
        default:
            return state
    }
}

export default Reducer1;