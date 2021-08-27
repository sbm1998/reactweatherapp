import {SIGN_UP,
    SIGN_IN, 
    WEATHER,
    GEO_LOCATION,
    HISTORY,
    SAVED_CITY,   
} 
from '../actions/index';

const initialState={
    users:[],
    weather:[],
    geolocationdata:[],
    history:[],
    token: localStorage.getItem("token"),
    id:localStorage.getItem("id"),
    name:localStorage.getItem("name"),
    city:localStorage.getItem("city")
}

export default function userInfo(state=initialState,action){
    switch(action.type){
        case SIGN_UP :
            return{
                ...state,
                users: [...state.users, action.payload],
                token:action.payload.token,
                id:action.payload.id,
                name:action.payload.name,
                city:action.payload.city
            }
        case SIGN_IN:
            return{
                ...state,
                users:[...state.users,...action.payload]
            }
        
        case WEATHER:
            return{
                ...state,
               weather:action.payload
            }
        case GEO_LOCATION:
            return{
                ...state,
                geolocationdata:action.payload
            }
        case HISTORY:
            return{
                ...state,
                history:action.payload
            }
        case SAVED_CITY:
            return{
                ...state,
                weather:action.payload
            }
        default:
        return state
        }
    }