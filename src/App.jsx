import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          {/* Home */}
          <Route exact path='/' component={Home} />
          {/* 잘못된 주소를 입력했을 때 */}
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
