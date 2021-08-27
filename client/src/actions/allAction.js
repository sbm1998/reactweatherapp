import {SIGN_UP,
        SIGN_IN,
        WEATHER,
        GEO_LOCATION,
        HISTORY,
        SAVED_CITY
    } 
from './index' 

export const signup=(payload)=>({
    type:SIGN_UP,
    payload,
})

export const signin=(payload)=>{
    console.log(payload.token)
    console.log(payload.result._id)
    console.log(payload.result.name)
    localStorage.setItem("token",payload.token)
    localStorage.setItem("id",payload.result._id)
    localStorage.setItem("name",payload.result.name)
    localStorage.setItem("city",payload.result.city)

    return{
    type:SIGN_IN,
    payload,
    }
}

export const fetchWeather=(payload)=>({
    type:WEATHER,
    payload,
})

export const fetchGeoLocation=(payload)=>({
    type:GEO_LOCATION,
    payload,
})

export const historyInfo=(payload)=>({
    type:HISTORY,
    payload,
})

export const savedCity=(payload)=>({
    type:SAVED_CITY,
    payload,
})
