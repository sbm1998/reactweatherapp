import React from 'react'
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

export const DashBoard=()=>{
    navigator.geolocation.getCurrentPosition(pos => console.log(pos));

    

    return(
        <>
        <h1>Welcome to Dashborad</h1>
        </>
    )
}