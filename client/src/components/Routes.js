import {Route,Redirect,BrowserRouter,Switch } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { DashBoard } from './DashBoard';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const PrivateRoute=(props)=>{
    const {token}=useSelector((state)=>state.userInfo)
    console.log('login',token)

    return token ?(
        <Route {...props} />
    ):(
        <Redirect to={{pathname:"/login"}}/>
    )
}

function Routes(){
   const {token}=useSelector((state)=>state.userInfo);

    return(
        <BrowserRouter>
        <Switch>
        <PrivateRoute path='/dashboard' exact component={DashBoard}/>

        <Route path='/' exact component={SignUpForm} />
        <Route path='/login' exact component={LoginForm} />
        </Switch>
        </BrowserRouter>
    )
}
export default Routes