import React from 'react'
import { useHistory } from "react-router-dom";
const Welcome=()=>{
    let history=useHistory();
    return(
        <div>
            <center>
           {/*<button onClick={() => window.location.href = '/userform'}>User form</button>*/}
           <h1><em>Hello Welcome to Crud Application</em></h1>
           <h1><em>First You can Login and Signup To Use</em></h1>
           <button onClick={() =>{history.push("/login");}}>Login</button><br /><br />
           <button onClick={() =>{history.push("/signup");}}>SignUp</button><br /><br />
           {/* <button onClick={() =>{history.push("/getusers");}}>ShowUsers</button><br /><br /> */}
           </center>
        </div>
    )
}
export default Welcome;
