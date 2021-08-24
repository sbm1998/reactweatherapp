import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUp } from '../userThunk';

const SignUpForm=()=>{
    const [state,setState]=useState({
        name:"",
        email:"",
        city:"",
        password:"",
    })
    const [error,setError]=useState(" ")
    let dispatch=useDispatch();
    let history=useHistory();

    const {name,email,city,password}=state;
    const handleSignUpData=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!name || !email || !city|| !password){
            setError("Fill All the Value First");
        }
        else{
            console.log(state.name,state.email,state.city,state.password)
            dispatch(signUp(state));
            history.push("/login");
            setError("");
    }
}
    return(
        <div>
            <center>
            <h2><em>SignUp Form</em></h2>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
            <label for="name">Name:</label><br/>
            <input type="text" id="fname" name="name" value={name} onChange={handleSignUpData}/><br />
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" value={email} onChange={handleSignUpData}/><br />
            <label for="city">City:</label><br />
            <input type="text" id="city" name="city" value={city} onChange={handleSignUpData}/><br />
            <label for="password">Password:</label><br />
            <input type="password" id="password" name="password" value={password} onChange={handleSignUpData}/><br />
            <input type="submit" value="Submit"/>
            </form>
            </center>
            </div>
    )
}
export default SignUpForm;
