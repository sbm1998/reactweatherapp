import {SIGN_UP,
    SIGN_IN, 
    WEATHER,   
} 
from '../actions/index';

const initialState={
    users:[],
    weather:[],
    token: localStorage.getItem("token"),
    id:localStorage.getItem("id"),
    name:localStorage.getItem("name"),
}

export default function userInfo(state=initialState,action){
    switch(action.type){
        case SIGN_UP :
            return{
                ...state,
                users: [...state.users, action.payload],
                token:action.payload.token,
                id:action.payload.id,
                name:action.payload.name
            }
        case SIGN_IN:
            return{
                ...state,
                users:[...state.users,...action.payload]
            }
        
        case WEATHER:
          //  console.log(action)
            return{
                ...state,
               weather:action.payload
            }
    
        default:
        return state
        }
    }