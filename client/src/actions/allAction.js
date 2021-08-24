import {SIGN_UP,
        SIGN_IN} 
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

    return{
    type:SIGN_IN,
    payload,
    }
}