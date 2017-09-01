import React from 'react'
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainContainer, HomeContainer, AuthenticateContainer } from 'containers'

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={MainContainer} />
      <Route exact path ='/' component={HomeContainer} />
      <Route path='/auth' component={AuthenticateContainer} />
      <Route path ='/error' component={HomeContainer} />
    </div>
  </BrowserRouter>
)

export default routes