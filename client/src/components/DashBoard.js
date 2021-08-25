import React,{useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
//import { useHistory } from 'react-router-dom';
import { requestFetchWeather } from '../userThunk';



const DashBoard=()=>{
    const records=useSelector((state)=>state.userInfo.weather);
    console.log(records);
    const weatherData=[records]
    const [state,setState]=useState({
        city:"",
    })
    const [error,setError]=useState(" ")
    let dispatch=useDispatch();
 //   let history=useHistory();

    const {city}=state;
    const handleAddData=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!city){
            setError("Fill All the Value First");
        }
        else{
            console.log(state.city)
            dispatch(requestFetchWeather(state));
            setError("");
    }
}
    return(
        <div>
            <center>
            <h2>DashBoard</h2>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
            <label for="city">City:</label><br/>
            <input type="text" id="title" name="city" value={city} onChange={handleAddData}/><br />
            <input type="submit" value="Submit"/>
            </form>
            <div>
                <h3>City = {records.city}</h3>
                <h3>MinTemp ={records.minTemp}</h3>
                <h3>MaxTemp ={records.maxTemp}</h3>
                <h3>humidity ={records.humidity}</h3>
                <h3>country ={records.country}</h3>
            </div>
            </center>
            </div>

    )
}
export default DashBoard;
