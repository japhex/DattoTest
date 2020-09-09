import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Homepage } from './pages/homepage'
import { About } from './pages/about'

export default (
  <Switch>
    <Route exact path="/">
      <Homepage />
    </Route>
    <Route path="/about">
      <About />
    </Route>
  </Switch>
)
