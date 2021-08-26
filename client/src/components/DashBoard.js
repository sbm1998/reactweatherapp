import React,{useState,useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
//import { useHistory } from 'react-router-dom';
import { requestFetchWeather,requestGeoLocation } from '../userThunk';



const DashBoard=()=>{
    const records=useSelector((state)=>state.userInfo.weather);
    const location=useSelector((state)=>state.userInfo.geolocationdata);
    const name=useSelector((state)=>state.userInfo.name)
    const userid=useSelector((state)=>state.userInfo.id)
    console.log(records);
    console.log(name);
    const [state,setState]=useState({
        city:"",
        username:name,
    })
    const [error,setError]=useState(" ")
    let dispatch=useDispatch();
 //   let history=useHistory();

    const {city,username}=state;
    const handleAddData=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!city || !username){
            setError("Fill All the Value First");
        }
        else{
            console.log(state.city,state.username)
            dispatch(requestFetchWeather(state));
            setError("");
    }
}
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude,longitude}=position.coords
            dispatch(requestGeoLocation({latitude,longitude}))
        })
    },[dispatch])
    const temp1=records.minTemp
    const temp2=records.maxTemp
    const convertTemp=temp1-273.15
    const convertTemp2=temp2-273.15

    const tempcurr1=location.minTemp
    const tempcurr2=location.maxTemp
    const convertTempcurr1=tempcurr1-273.15
    const convertTempcurr2=tempcurr2-273.15
    return(
        <div>
            <center>
            <h2>DashBoard</h2>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
            <label for="city">City:</label><br/>
            <input type="text" id="title" name="city" value={city} onChange={handleAddData}/><br />
            <label for="user">User:</label><br />
            <input type="text" id="username" name="username" value={username} onChange={handleAddData} readOnly/><br />
            <input type="submit" value="Submit"/>
            </form>
            <div>
                <h2>!!User Searched City Weather Data!!</h2>
                <h3>City = {records.city}</h3>
                <h3>MinTemp ={convertTemp}</h3>
                <h3>MaxTemp ={convertTemp2}</h3>
                <h3>humidity ={records.humidity}</h3>
                <h3>country ={records.country}</h3>
            </div>
            </center>
            <div>
                <h2>!!User Current City Weather Data!!</h2>
                <h3>City = {location.city}</h3>
                <h3>MinTemp ={convertTempcurr1}</h3>
                <h3>MaxTemp ={convertTempcurr2}</h3>
                <h3>humidity ={location.humidity}</h3>
                <h3>country ={location.country}</h3>
            </div>
            </div>

    )
}
export default DashBoard;
