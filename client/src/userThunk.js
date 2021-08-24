import axios from 'axios';
import {signup,
        signin,
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

