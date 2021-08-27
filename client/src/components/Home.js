import React from 'react'
import { useHistory } from "react-router-dom";
const Home=()=>{
    let history=useHistory();

    const handleLogout=()=>{
        localStorage.removeItem("token"); 
        localStorage.removeItem("id");
        localStorage.removeItem("name");  

        history.push("/login")
    }

    return(
        <div>
            <center>
           {/*<button onClick={() => window.location.href = '/userform'}>User form</button>*/}
           <h1><em>Hello Welcome to Home Page of Application</em></h1>
           <h1><em>You Can Add New User or See Details of Existing User</em></h1>
           <button onClick={() =>{history.push("/dashboard");}}>DashBoard</button><br /><br />
           <button onClick={() =>{history.push("/history");}}>History</button><br /><br />
          

           <button onClick={handleLogout}>Logout</button><br /><br />
           </center>
        </div>
    )
}
export default Home;

