import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Details from './components/Details'
import Error from './components/Error'
import Login from './components/Login'
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/detail/:id'>
            <Details/>
          </Route>
          <Route path='/'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route exact path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
