import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Chat from './pages/Chat';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route  exact path="/login" component={Login} />
                <Route  exact path="/chat" component={() => sessionStorage.getItem('nickName') ? <Chat /> : <Redirect  to="/login"/>} />
                <Route path="*" component={() => <Redirect  to="/login"/>} />
            </Switch>
        </BrowserRouter>
    )
} 