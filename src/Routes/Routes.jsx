import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";
import RegisterPage from '../components/pages/RegisterPage/RegisterPage';
import NotFound from '../components/pages/NotFound/NotFound';
const Routes = () => {
    const user = useSelector(state => state.user)
    const authRoutes = ["/", "/auth-things"];
    const checkUserAuth = (route) =>{
        if(!user.token && authRoutes.includes(route)) {
        console.log(user,'USER')
           return <Redirect to='/register'/>
          
        } else {
            return
        }
    }
    return (
      <React.Fragment>
        <Switch>
            <Route exact path="/"/>
            <Route excact path="/register" component={RegisterPage} />
            <Route exact path="/auth-things" render={() => checkUserAuth("/auth-things")}/>
            <Route path='*' component={NotFound} />
        </Switch>
      </React.Fragment>
    );

}

export default Routes;