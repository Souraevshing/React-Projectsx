import React from 'react'
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Dashboard} />
        <Route path='/login' exact={true} component={Login} />
        <Route path='*' exact={true} component={Error} />
      </Switch>
    </Router>
  )
}

export default App
