import axios from 'axios';
//import { request } from 'express';


 const RootURL='https://api.openweathermap.org/data/2.5/weather'
  const APPID="5182df5599741f34aea14c57d4c57235"

export const getFetchData=async(req,res)=>{
    const {q}=req.query
    const data=RootURL+`?q=${q}&APPID=${APPID}`
    console.log(data)
    console.log("shubham")
    try{
        const weatherData=await axios.get(`${data}`)
        console.log(weatherData)    

        const resData = {
            city: weatherData.data.name,
            minTemp: weatherData.data.main?.temp_min,
            maxTemp: weatherData.data.main?.temp_max,
            humidity: weatherData.data.main.humidity,
            country: weatherData.data.sys.country,
        }

        console.log("shubham")
        return res.status(200).send(resData);
    }
    catch(error){
        console.log(error);
    }
  }
