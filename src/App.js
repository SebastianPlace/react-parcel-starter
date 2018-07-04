// @flow
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HomePage from './pages/home/HomePage'

const NavBar = ({ children }) => {
  return <div className='flex p-4'>{children}</div>
}

type Props = {}

class App extends Component<Props> {
  render () {
    return (
      <Router>
        <div>
          <NavBar>
            <Link to='/' className='no-underline pr-3'>
              Home
            </Link>
          </NavBar>
          <div className='p-4'>
            <Route exact path='/' component={HomePage} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
