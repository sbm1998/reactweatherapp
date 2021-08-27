import {Route,Redirect,BrowserRouter,Switch } from 'react-router-dom';
import DashBoard from './DashBoard';
import {useSelector} from 'react-redux';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import UsersHistory from './UsersHistory';
import LandingPage from './LandingPage';
import Home from './Home';

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
   //const {token}=useSelector((state)=>state.userInfo);

    return(
        <BrowserRouter>
        <Switch>
        <PrivateRoute path='/dashboard' exact component={DashBoard}/>
        <PrivateRoute path='/history' exact component={UsersHistory}/>
        <PrivateRoute path='/home' exact component={Home}/>
        
        <Route path='/' exact component={LandingPage} />
        <Route path='/signup' exact component={SignUpForm} />
        <Route path='/login' exact component={LoginForm} />

        </Switch>
        </BrowserRouter>
    )
}
export default Routes