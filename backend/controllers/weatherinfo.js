import axios from 'axios';
//import { request } from 'express';
import historyData from '../models/historyData.js';



 const RootURL='https://api.openweathermap.org/data/2.5/weather'
  const APPID="5182df5599741f34aea14c57d4c57235"

export const getFetchData=async(req,res)=>{
    const {q,username}=req.query
    const date=new Date()
    const time=new Date().toTimeString()

    const data=RootURL+`?q=${q}&APPID=${APPID}`
    try{
        const weatherData=await axios.get(`${data}`)
        const resData = {
            city: weatherData.data.name,
            minTemp: weatherData.data.main?.temp_min,
            maxTemp: weatherData.data.main?.temp_max,
            humidity: weatherData.data.main.humidity,
            country: weatherData.data.sys.country,
        }
        const datainfo=new historyData({name:username,date,time,climatedata:resData})
        await datainfo.save()
        return res.status(200).send(resData);
    }
    catch(error){
        console.log(error);
    }
  }
export const userGeoLocation=async(req,res)=>{
    const {lat,lon}=req.query

    const currlocation=RootURL+`?lat=${lat}&lon=${lon}&APPID=${APPID}`
    console.log(currlocation)
    try{
       const currgeolocation=await axios.get(`${currlocation}`)
       const resGeoLocationData = {
        city: currgeolocation.data.name,
        minTemp: currgeolocation.data.main?.temp_min,
        maxTemp: currgeolocation.data.main?.temp_max,
        humidity: currgeolocation.data.main.humidity,
        country: currgeolocation.data.sys.country,
    }
    return res.status(200).send(resGeoLocationData);
    }
    catch(error){
        console.log(error)
    }
}
