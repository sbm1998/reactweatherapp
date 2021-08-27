import axios from 'axios';
import {signup,
        signin,
        fetchWeather,
        fetchGeoLocation,
        historyInfo,
        savedCity
} from './actions/allAction'


const URL = axios.create({
    baseURL:  'http://localhost:8080',
  });

  export const signUp = (userdata) => {
    return async(dispatch)=>{
    try{
    const signUpData=await URL.post('/signup', userdata);
    
    dispatch(signup(signUpData.data));
  } catch (error) {
    console.log(error);
  }
   }
}

export const signIn = (logindata) => {
    return async(dispatch)=>{
    try{
    const signInData=await URL.post('/signin', logindata);
    
    dispatch(signin(signInData.data));
  } catch (error) {
    console.log(error);
  }
   }
}

export const requestFetchWeather=(weatherdata)=>{
  return async(dispatch)=>{
    try {
        console.log(weatherdata)
        const {city,username}=weatherdata
        const userstask=await URL.get(`/weatherdata?q=${city}&username=${username}`)
        console.log(userstask)
       dispatch(fetchWeather(userstask.data))
    } catch (error) {
        console.log(error)
    }
}
}

export const requestGeoLocation=(data)=>{
  return async(dispatch)=>{
    const {latitude,longitude}=data;
    try{
      const geolocationdata=await URL.get(`/locationdata?lat=${latitude}&lon=${longitude}`)
      console.log(geolocationdata)
      dispatch(fetchGeoLocation(geolocationdata.data))
    }
    catch(error){
      console.log(error);
    }
  }
}

export const requestGetHistory=(state)=>{
  return async(dispatch)=>{
    try{
      console.log(state)
      const datainfo=await URL.get(`/historydata/${state}`)
      console.log(datainfo);
      dispatch(historyInfo(datainfo.data))
    }
    catch(error){
      console.log(error);
    }
  }
}

export const requestSaveCity=(state)=>{
  return async(dispatch)=>{
    try{
      console.log(state)
      const usercity=await URL.get(`/savecity/${state}`)
      console.log(usercity);
      dispatch(savedCity(usercity.data))
    }
    catch(error){
      console.log(error);
    }
  }
}