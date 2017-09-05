import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainContainer, HomeContainer, AuthenticateContainer } from 'containers';

const routes = (
    <BrowserRouter>
        <div>
            <Route path='/' component={MainContainer} />
            <Route exact={true} path ='/' component={HomeContainer} />
            <Route path='/auth' component={AuthenticateContainer} />
            <Route path ='/error' component={HomeContainer} />
        </div>
    </BrowserRouter>
);

export default routes;
